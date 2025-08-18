#!/usr/bin/env node

/**
 * Postman Collection Generator for Game Sandbox Backend
 *
 * This script generates a Postman collection with:
 * - All API endpoints organized by category
 * - Environment files (local, staging, production)
 * - Automatic token handling with post-response scripts
 * - Pre-request scripts for authentication
 * - Example request bodies and parameters
 */

const fs = require('fs');
const path = require('path');

// Collection structure
const collection = {
  info: {
    name: 'Game Sandbox Backend API',
    description: 'Complete API collection for the Game Sandbox RPG game backend service',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
  },
  variable: [
    {
      key: 'BASE_URL',
      value: '{{BASE_URL}}',
      type: 'string',
    },
    {
      key: 'AUTH_TOKEN',
      value: '{{AUTH_TOKEN}}',
      type: 'string',
    },
  ],
  auth: {
    type: 'bearer',
    bearer: [
      {
        key: 'token',
        value: '{{AUTH_TOKEN}}',
        type: 'string',
      },
    ],
  },
  item: [],
};

// Environment templates
const environments = {
  local: {
    name: 'Game Sandbox - Local',
    values: [
      { key: 'BASE_URL', value: 'http://localhost:8000', enabled: true },
      { key: 'AUTH_TOKEN', value: '', enabled: true },
    ],
  },
  staging: {
    name: 'Game Sandbox - Staging',
    values: [
      { key: 'BASE_URL', value: 'https://staging-api.gamesandbox.com', enabled: true },
      { key: 'AUTH_TOKEN', value: '', enabled: true },
    ],
  },
  production: {
    name: 'Game Sandbox - Production',
    values: [
      { key: 'BASE_URL', value: 'https://api.gamesandbox.com', enabled: true },
      { key: 'AUTH_TOKEN', value: '', enabled: true },
    ],
  },
};

// Helper function to create request items
function createRequest(name, request, description = '') {
  return {
    name,
    request: {
      ...request,
      url: {
        raw: `{{BASE_URL}}${request.url.raw}`,
        host: ['{{BASE_URL}}'],
        path: request.url.path,
      },
    },
    response: [],
    description,
  };
}

// Helper function to create folder
function createFolder(name, description = '', items = []) {
  return {
    name,
    description,
    item: items,
  };
}

// Health Check endpoints
const healthEndpoints = [
  createRequest(
    'Health Check',
    {
      method: 'GET',
      url: {
        raw: '/health',
        path: ['health'],
      },
    },
    'Check server health status'
  ),
];

// Authentication endpoints (sorted: POST, GET, POST)
const authEndpoints = [
  createRequest(
    'Register User',
    {
      method: 'POST',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            username: 'irfanmaulana007',
            email: 'dev.irfanmaulana007@gmail.com',
            password: 'asd123',
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/auth/register',
        path: ['api', 'auth', 'register'],
      },
    },
    'Register a new user account'
  ),

  createRequest(
    'Login User',
    {
      method: 'POST',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            username: 'irfanmaulana007',
            password: 'asd123',
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/auth/login',
        path: ['api', 'auth', 'login'],
      },
    },
    'Login with username and password'
  ),

  createRequest(
    'Get Current User',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/auth/me',
        path: ['api', 'auth', 'me'],
      },
    },
    'Get current authenticated user information'
  ),

  createRequest(
    'Logout User',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/auth/logout',
        path: ['api', 'auth', 'logout'],
      },
    },
    'Logout current user (client-side token removal)'
  ),
];

// Character endpoints (sorted: GET all, GET by ID, POST, PUT, DELETE, POST custom)
const characterEndpoints = [
  createRequest(
    'Get All Characters',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/characters',
        path: ['api', 'characters'],
      },
    },
    'Get all characters for the authenticated user'
  ),

  createRequest(
    'Get My Character',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/characters/me',
        path: ['api', 'characters', 'me'],
      },
    },
    'Get single character for the authenticated user'
  ),

  createRequest(
    'Get Character by ID',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/characters/{{character_id}}',
        path: ['api', 'characters', '{{character_id}}'],
      },
    },
    'Get character details by ID'
  ),

  createRequest(
    'Create Character',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            name: 'Hero',
            job_id: 1,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/characters',
        path: ['api', 'characters'],
      },
    },
    'Create a new character'
  ),

  createRequest(
    'Update Character',
    {
      method: 'PUT',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            name: 'Updated Hero',
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/characters/{{character_id}}',
        path: ['api', 'characters', '{{character_id}}'],
      },
    },
    'Update character information'
  ),

  createRequest(
    'Delete Character',
    {
      method: 'DELETE',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/characters/{{character_id}}',
        path: ['api', 'characters', '{{character_id}}'],
      },
    },
    'Delete a character'
  ),

  createRequest(
    'Allocate Status Points',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            health_points: 2,
            attack_points: 1,
            defense_points: 1,
            speed_points: 0,
            critical_points: 0,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/characters/{{character_id}}/allocate-stats',
        path: ['api', 'characters', '{{character_id}}', 'allocate-stats'],
      },
    },
    'Allocate status points to character stats'
  ),
];

// Equipment endpoints (sorted: GET all, GET by ID)
const equipmentEndpoints = [
  createRequest(
    'Get All Equipment',
    {
      method: 'GET',
      url: {
        raw: '/api/equipment?page=1&limit=10',
        path: ['api', 'equipment'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get all equipment with pagination'
  ),

  createRequest(
    'Get Equipment by ID',
    {
      method: 'GET',
      url: {
        raw: '/api/equipment/1',
        path: ['api', 'equipment', '1'],
      },
    },
    'Get equipment details by ID'
  ),
];

// Monster endpoints (sorted: GET all, GET by ID, GET by map, GET by rank)
const monsterEndpoints = [
  createRequest(
    'Get All Monsters',
    {
      method: 'GET',
      url: {
        raw: '/api/monsters?page=1&limit=10',
        path: ['api', 'monsters'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get all monsters with pagination'
  ),

  createRequest(
    'Get Monster by ID',
    {
      method: 'GET',
      url: {
        raw: '/api/monsters/1',
        path: ['api', 'monsters', '1'],
      },
    },
    'Get monster details by ID'
  ),

  createRequest(
    'Get Monsters by Map',
    {
      method: 'GET',
      url: {
        raw: '/api/monsters/map/1?page=1&limit=10',
        path: ['api', 'monsters', 'map', '1'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get monsters by map ID'
  ),

  createRequest(
    'Get Monsters by Rank',
    {
      method: 'GET',
      url: {
        raw: '/api/monsters/rank/elite?page=1&limit=10',
        path: ['api', 'monsters', 'rank', 'elite'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get monsters by rank'
  ),
];

// Map endpoints (sorted: GET all, GET by ID)
const mapEndpoints = [
  createRequest(
    'Get All Maps',
    {
      method: 'GET',
      url: {
        raw: '/api/maps?page=1&limit=10',
        path: ['api', 'maps'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get all maps with pagination'
  ),

  createRequest(
    'Get Map by ID',
    {
      method: 'GET',
      url: {
        raw: '/api/maps/1',
        path: ['api', 'maps', '1'],
      },
    },
    'Get map details by ID'
  ),
];

// Map Zones endpoints (sorted: GET all, GET by ID, POST, PUT, DELETE, GET by map ID)
const mapZonesEndpoints = [
  createRequest(
    'Get All Map Zones',
    {
      method: 'GET',
      url: {
        raw: '/api/map-zones?page=1&limit=10',
        path: ['api', 'map-zones'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get all map zones with pagination'
  ),

  createRequest(
    'Get Map Zone by ID',
    {
      method: 'GET',
      url: {
        raw: '/api/map-zones/1',
        path: ['api', 'map-zones', '1'],
      },
    },
    'Get map zone details by ID'
  ),

  createRequest(
    'Create Map Zone',
    {
      method: 'POST',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            map_id: 1,
            name: 'Forest Clearing',
            description: 'A peaceful clearing in the forest',
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/map-zones',
        path: ['api', 'map-zones'],
      },
    },
    'Create a new map zone'
  ),

  createRequest(
    'Update Map Zone',
    {
      method: 'PUT',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            name: 'Updated Forest Clearing',
            description: 'An updated description for the forest clearing',
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/map-zones/1',
        path: ['api', 'map-zones', '1'],
      },
    },
    'Update an existing map zone'
  ),

  createRequest(
    'Delete Map Zone',
    {
      method: 'DELETE',
      url: {
        raw: '/api/map-zones/1',
        path: ['api', 'map-zones', '1'],
      },
    },
    'Delete a map zone'
  ),

  createRequest(
    'Get Map Zones by Map ID',
    {
      method: 'GET',
      url: {
        raw: '/api/map-zones/map/1',
        path: ['api', 'map-zones', 'map', '1'],
      },
    },
    'Get all zones for a specific map'
  ),
];

// Battle endpoints (sorted: POST, GET by ID, GET by character)
const battleEndpoints = [
  createRequest(
    'Start Battle',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            character_id: '{{character_id}}',
            monster_id: 1,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/battle/start',
        path: ['api', 'battle', 'start'],
      },
    },
    'Start a battle between character and monster'
  ),

  createRequest(
    'Get Battle by ID',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/battle/{{battle_id}}',
        path: ['api', 'battle', '{{battle_id}}'],
      },
    },
    'Get battle details by ID'
  ),

  createRequest(
    'Get Character Battles',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/battle/character/{{character_id}}?page=1&limit=10',
        path: ['api', 'battle', 'character', '{{character_id}}'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get battle history for a character'
  ),
];

// Inventory endpoints (sorted: GET, POST, PUT, DELETE)
const inventoryEndpoints = [
  createRequest(
    'Get Character Inventory',
    {
      method: 'GET',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/inventory/{{character_id}}',
        path: ['api', 'inventory', '{{character_id}}'],
      },
    },
    "Get character's inventory items"
  ),

  createRequest(
    'Add Item to Inventory',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            itemId: 1,
            quantity: 5,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/inventory/{{character_id}}/items',
        path: ['api', 'inventory', '{{character_id}}', 'items'],
      },
    },
    'Add item to character inventory'
  ),

  createRequest(
    'Update Item Quantity',
    {
      method: 'PUT',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            quantity: 10,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/inventory/{{character_id}}/items/1',
        path: ['api', 'inventory', '{{character_id}}', 'items', '1'],
      },
    },
    'Update item quantity in inventory'
  ),

  createRequest(
    'Remove Item from Inventory',
    {
      method: 'DELETE',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/inventory/{{character_id}}/items/1',
        path: ['api', 'inventory', '{{character_id}}', 'items', '1'],
      },
    },
    'Remove item from character inventory'
  ),
];

// Experience endpoints (sorted: GET all, GET by ID, POST, PUT, DELETE, POST bulk, GET next level)
const experienceEndpoints = [
  createRequest(
    'Get All Experience Levels',
    {
      method: 'GET',
      url: {
        raw: '/api/experience?page=1&limit=10',
        path: ['api', 'experience'],
        query: [
          { key: 'page', value: '1' },
          { key: 'limit', value: '10' },
        ],
      },
    },
    'Get all experience levels with pagination'
  ),

  createRequest(
    'Get Experience Level by Level',
    {
      method: 'GET',
      url: {
        raw: '/api/experience/10',
        path: ['api', 'experience', '10'],
      },
    },
    'Get experience level by level number'
  ),

  createRequest(
    'Get Next Level Info',
    {
      method: 'GET',
      url: {
        raw: '/api/experience/next/1000',
        path: ['api', 'experience', 'next', '1000'],
      },
    },
    'Get experience required for next level'
  ),

  createRequest(
    'Create Experience Level',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            level: 100,
            experience: 1000000,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/experience',
        path: ['api', 'experience'],
      },
    },
    'Create new experience level (admin only)'
  ),

  createRequest(
    'Update Experience Level',
    {
      method: 'PUT',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          {
            experience: 1200000,
          },
          null,
          2
        ),
      },
      url: {
        raw: '/api/experience/100',
        path: ['api', 'experience', '100'],
      },
    },
    'Update experience level (admin only)'
  ),

  createRequest(
    'Delete Experience Level',
    {
      method: 'DELETE',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
      ],
      url: {
        raw: '/api/experience/100',
        path: ['api', 'experience', '100'],
      },
    },
    'Delete experience level (admin only)'
  ),

  createRequest(
    'Bulk Create Experience Levels',
    {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{AUTH_TOKEN}}',
        },
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
      body: {
        mode: 'raw',
        raw: JSON.stringify(
          [
            { level: 101, experience: 1100000 },
            { level: 102, experience: 1200000 },
            { level: 103, experience: 1300000 },
          ],
          null,
          2
        ),
      },
      url: {
        raw: '/api/experience/bulk',
        path: ['api', 'experience', 'bulk'],
      },
    },
    'Bulk create experience levels (admin only)'
  ),
];

// Build collection structure with consistent sorting
collection.item = [
  createFolder('Health Check', 'Server health and status endpoints', healthEndpoints),
  createFolder('Authentication', 'User authentication and management', authEndpoints),
  createFolder('Characters', 'Character creation, management, and progression', characterEndpoints),
  createFolder('Equipment', 'Equipment browsing and information', equipmentEndpoints),
  createFolder('Monsters', 'Monster information and filtering', monsterEndpoints),
  createFolder('Maps', 'Game maps and area information', mapEndpoints),
  createFolder('Map Zones', 'Map zones and area management', mapZonesEndpoints),
  createFolder('Battle', 'Combat system and battle management', battleEndpoints),
  createFolder('Inventory', 'Character inventory management', inventoryEndpoints),
  createFolder('Experience', 'Experience levels and progression system', experienceEndpoints),
];

// Add post-response script to login endpoint for automatic token handling
const loginRequest = collection.item[1].item[1]; // Authentication > Login User
loginRequest.event = [
  {
    listen: 'test',
    script: {
      exec: [
        '// Automatically set AUTH_TOKEN after successful login',
        'if (pm.response.code === 200) {',
        '    const responseJson = pm.response.json();',
        '    if (responseJson.success && responseJson.data && responseJson.data.token) {',
        "        pm.environment.set('AUTH_TOKEN', responseJson.data.token);",
        "        console.log('✅ AUTH_TOKEN automatically updated');",
        '    }',
        '} else {',
        "    console.log('❌ Login failed, AUTH_TOKEN not updated');",
        '}',
      ],
      type: 'text/javascript',
    },
  },
];

// Add pre-request script to authenticated endpoints
function addAuthScript(request) {
  if (request.header && request.header.some(h => h.key === 'Authorization')) {
    if (!request.event) request.event = [];
    request.event.push({
      listen: 'prerequest',
      script: {
        exec: [
          '// Check if AUTH_TOKEN is set',
          "const token = pm.environment.get('AUTH_TOKEN');",
          'if (!token) {',
          "    console.warn('⚠️ AUTH_TOKEN not set. Please login first.');",
          '} else {',
          "    console.log('✅ Using AUTH_TOKEN for request');",
          '}',
        ],
        type: 'text/javascript',
      },
    });
  }
}

// Apply auth scripts to all authenticated endpoints
function applyAuthScripts(items) {
  items.forEach(item => {
    if (item.item) {
      applyAuthScripts(item.item);
    } else if (item.request) {
      addAuthScript(item.request);
    }
  });
}

applyAuthScripts(collection.item);

// Generate collection file
const collectionPath = path.join(__dirname, 'Game-Sandbox-API.postman_collection.json');
fs.writeFileSync(collectionPath, JSON.stringify(collection, null, 2));
console.log(`✅ Postman collection generated: ${collectionPath}`);

// Generate environment files
Object.entries(environments).forEach(([envName, envData]) => {
  const envPath = path.join(
    __dirname,
    `Game-Sandbox-${envName.charAt(0).toUpperCase() + envName.slice(1)}.postman_environment.json`
  );
  fs.writeFileSync(envPath, JSON.stringify(envData, null, 2));
  console.log(`✅ Environment file generated: ${envPath}`);
});

// Generate README for Postman usage
const postmanReadme = `# Postman Collection Setup Guide

## 📥 Importing the Collection

1. **Open Postman**
2. **Click "Import"** button
3. **Drag and drop** the \`Game-Sandbox-API.postman_collection.json\` file
4. **Import the collection**

## 🌍 Setting Up Environments

### Import Environment Files

1. **Click "Import"** in Postman
2. **Import each environment file**:
   - \`Game-Sandbox-Local.postman_environment.json\`
   - \`Game-Sandbox-Staging.postman_environment.json\`
   - \`Game-Sandbox-Production.postman_environment.json\`

### Select Environment

1. **Click the environment dropdown** (top-right corner)
2. **Select your desired environment** (Local, Staging, or Production)
3. **Verify BASE_URL is set correctly**

## 🔐 Authentication Setup

### Automatic Token Handling

The collection includes **automatic token management**:

1. **Login first** using the "Login User" endpoint
2. **AUTH_TOKEN is automatically set** in your environment
3. **All authenticated requests** will use this token automatically
4. **No manual token copying** required!

### Manual Token Setup (if needed)

1. **Run the "Login User" request**
2. **Copy the token** from the response
3. **Set AUTH_TOKEN** in your environment variables
4. **Or let the automatic script handle it**

## 🚀 Getting Started

### 1. Health Check
- Start with "Health Check" to verify server is running

### 2. User Registration
- Use "Register User" to create a test account

### 3. User Login
- Use "Login User" with your credentials
- Token is automatically saved

### 4. Create Character
- Use "Create Character" to make your first character
- Note the character ID for other requests

### 5. Explore Other Endpoints
- All endpoints are organized by category
- Use the character ID from step 4 in other requests

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| \`BASE_URL\` | API base URL | \`http://localhost:8000\` |
| \`AUTH_TOKEN\` | JWT authentication token | \`eyJhbGciOiJIUzI1NiIs...\` |

## 📝 Request Variables

Some requests use **dynamic variables** that you need to set:

| Variable | Description | How to Set |
|----------|-------------|-------------|
| \`{{character_id}}\` | Character UUID | Copy from character creation response |
| \`{{battle_id}}\` | Battle UUID | Copy from battle start response |

## 🎯 Tips for Testing

1. **Start with unauthenticated endpoints** (Health, Equipment, Monsters, Maps, Experience)
2. **Create a user account** and login to get authentication
3. **Create a character** to test character-related endpoints
4. **Use the automatic token handling** - no need to manually copy tokens
5. **Check response status codes** and error messages
6. **Use the environment variables** for different deployment stages

## 🚨 Troubleshooting

### Common Issues

1. **"AUTH_TOKEN not set" warning**
   - Make sure you've logged in first
   - Check that the login request succeeded

2. **"401 Unauthorized" errors**
   - Verify your AUTH_TOKEN is set
   - Try logging in again

3. **"404 Not Found" errors**
   - Check that your BASE_URL is correct
   - Verify the server is running

4. **"500 Internal Server Error"**
   - Check server logs
   - Verify database connection

### Environment Issues

1. **Variables not updating**
   - Refresh the environment
   - Check for syntax errors in environment values

2. **Wrong BASE_URL**
   - Verify your server is running on the expected port
   - Check firewall and network settings

## 📚 Additional Resources

- **API Documentation**: Check the README.md in the project
- **Prisma Studio**: Run \`npm run db:studio\` to view database
- **Server Logs**: Check console output for detailed error information

---

**Happy Testing! 🧪**
`;

const postmanReadmePath = path.join(__dirname, 'POSTMAN_SETUP.md');
fs.writeFileSync(postmanReadmePath, postmanReadme);
console.log(`✅ Postman setup guide generated: ${postmanReadmePath}`);

console.log('\n🎉 Postman collection generation complete!');
console.log('\n📁 Generated files:');
console.log('  • Game-Sandbox-API.postman_collection.json');
console.log('  • Game-Sandbox-Local.postman_environment.json');
console.log('  • Game-Sandbox-Staging.postman_environment.json');
console.log('  • Game-Sandbox-Production.postman_environment.json');
console.log('  • POSTMAN_SETUP.md');
console.log('\n📖 See POSTMAN_SETUP.md for detailed setup instructions');
console.log('\n🚀 Import the collection and environments into Postman to start testing!');
