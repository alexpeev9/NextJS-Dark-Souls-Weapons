const { db } = require('@vercel/postgres')
const fs = require('fs')

// function to create tables in the database
async function createTables(client) {
  // create categories table
  await client.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id VARCHAR(32) PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        image VARCHAR(255),
        weapons UUID[],
        slug VARCHAR(255)
      );
    `)

  // create weapons table
  await client.query(`
      CREATE TABLE IF NOT EXISTS weapons (
        id UUID PRIMARY KEY,
        name VARCHAR(255),
        attackType VARCHAR(50),
        durability INT,
        weight NUMERIC,
        requirements JSONB,
        damage JSONB,
        bonus JSONB,
        category VARCHAR(32) REFERENCES categories(id),
        slug VARCHAR(255),
        image VARCHAR(255)
      );
    `)

  console.log(`Tables created successfully!`)
}

// Function to seed data into tables
async function seedTable(client, dataObj) {
  const { path, query, dataConverter } = dataObj

  // Read and parse JSON data from file
  const rawData = fs.readFileSync(path)
  const parsedData = JSON.parse(rawData)

  // Insert data into the database
  const createdRecords = await Promise.all(
    parsedData.map((dataElement) =>
      client.query(query, dataConverter(dataElement))
    )
  )

  console.log(`Seeded ${createdRecords.length} records!`)
}

// Main seeding function
async function seed() {
  const client = await db.connect()
  try {
    // Configuration for seeding categories table
    const categoriesData = {
      path: './utils/seed/categoriesData.json',
      query: `
      INSERT INTO categories (id, name, description, image, weapons, slug)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO NOTHING
      RETURNING *;`,
      dataConverter: function (data) {
        const convertedData = [
          data.id,
          data.name,
          data.description,
          data.image,
          data.weapons,
          data.slug
        ]
        return convertedData
      }
    }

    // Configuration for seeding weapons table
    const weaponsData = {
      path: './utils/seed/weaponsData.json',
      query: `INSERT INTO weapons (id, requirements, category, weight, damage, durability, name, attackType, bonus, slug, image)
      VALUES ($1, $2::jsonb, $3, $4, $5::jsonb, $6, $7, $8, $9::jsonb, $10, $11)
      ON CONFLICT (id) DO NOTHING
      RETURNING *;`,
      dataConverter: function (data) {
        const convertedData = [
          data.id,
          data.requirements,
          data.category,
          data.weight,
          data.damage,
          data.durability,
          data.name,
          data.attackType,
          data.bonus,
          data.slug,
          data.image
        ]
        return convertedData
      }
    }

    await createTables(client)
    await seedTable(client, categoriesData)
    await seedTable(client, weaponsData)
  } catch (error) {
    console.log(error)
  } finally {
    await client.end()
  }
}

// Execute the seeding process
seed()
