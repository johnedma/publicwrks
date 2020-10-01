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
