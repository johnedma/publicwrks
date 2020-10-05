customer
product
productType
order
user
<!-- const fetcher = url => fetch(url).then(r => r.json()) -->

Table Mocks
Art => id, title, description, image(url format), date(ie. period of work), artist(will be referenced to as collection type)
ArtMedium => id, type, amount {exa: 1 Shirt $45, 2 Mug $15 etc}
Custo => id, full_name, email
Order => id, artId, artMediumId, custoId, shipped(default to false)
User => single admin for viewing/editing dashboard

product detalil should be a comp passed in props by parent comp to tell it what it is (static assets mug t shirt etc)

npx dotenv sequelize-cli

confId, total, items
 "db:create": "dotenv sequelize-cli db:create", 

    "db:drop": "dotenv sequelize-cli db:drop",
    "db:migrate": "dotenv sequelize-cli db:migrate",
    "db:migrate:undo:all": "dotenv sequelize-cli db:migrate:undo:all",
    "db:redo": "npm run db:seed:undo:all && npm run db:migrate:undo:all && npm run db:migrate && npm run db:seed:all",
    "db:seed:all": "dotenv sequelize-cli db:seed:all",
    "db:seed:undo:all": "dotenv sequelize-cli db:seed:undo:all",
    "migration:generate": "sequelize-cli migration:generate",
    "model:generate": "sequelize-cli model:generate",
    "seed:generate": "sequelize-cli seed:generate",

    npx dotenv sequelize-cli model:generate --name Order --attributes
