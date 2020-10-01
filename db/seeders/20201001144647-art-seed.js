'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Arts', [
      {
        title: 'Madame Roulin and Her Baby',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/rl/mobile-large/DT3154.jpg',
        dated: '1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Shoes',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1947.jpg',
        dated: '1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'La Berceuse (Woman Rocking a Cradle; Augustine-Alix Pellicot Roulin, 1851–1930)',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-19279-001.jpg',
        dated: '1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'L&#39; Arlésienne: Madame Joseph-Michel Ginoux (Marie Julien, 1848–1911)',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1396.jpg',
        dated: '1888–89',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self-Portrait with a Straw Hat (obverse: The Potato Peeler)',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1502_cropped2.jpg',
        dated: '1887',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wheat Field with Cypresses',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1567.jpg',
        dated: '1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Irises',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP346474.jpg',
        dated: '1890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Road in Etten',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/rl/mobile-large/DP359031.jpg',
        dated: '1881',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Oleanders',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1494.jpg',
        dated: '1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bouquet of Flowers in a Vase',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT7098.jpg',
        dated: '1890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sunflowers',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP229743.jpg',
        dated: '1887',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Women Picking Olives',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-17161-001.jpg',
        dated: '1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Flowering Orchard',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-14936-045.jpg',
        dated: '1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Potato Peeler (reverse: Self-Portrait with a Straw Hat)',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1503.jpg',
        dated: '1885',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Peasant Woman Cooking by a Fireplace',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT2163.jpg',
        dated: '1885',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Corridor in the Asylum',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP108505.jpg',
        dated: 'September 1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Olive Trees',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DT1946.jpg',
        dated: '1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'First Steps, after Millet',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP124808.jpg',
        dated: '1890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Roses',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP346475.jpg',
        dated: '1890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cypresses',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ep/mobile-large/DP130999.jpg',
        dated: '1889',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nursery on Schenkweg',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP108508.jpg',
        dated: 'April–May 1882',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wheat Field',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP108507.jpg',
        dated: '1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Street in Saintes-Maries-de-la-Mer',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP108504.jpg',
        dated: 'ca. July 15, 1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Zouave',
        description: 'Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)',
        artist: 'Vincent van Gogh',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP108506.jpg',
        dated: 'ca. June 20, 1888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Café Heinrichhof',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP850429.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pitbull Terrier',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP847755.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Merry Christmas! (Frohe Weihnachten!)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP843826.jpg',
        dated: '1907',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nightly Conversations (Naechtliches Gespraech)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP843830.jpg',
        dated: '1907',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rainbow Obstacle (Hindernis Regenbogen)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP836345.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hygienic Ballad (Hygienische Ballade)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844938.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Telephone Conversation (Telefonisch Es Gespräch)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP843849.jpg',
        dated: '1907',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mindless Ballad (Stumpfsinnige Ballade)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844935.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hatpin Ballad (Hutnadelballade)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844937.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Poodle',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844717.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Greyhound',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844722.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bulldog',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844719.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Greyhound',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844718.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Greyhound',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP844716.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dancers (Apachentänze!)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP850439.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Naturally Gifted Singer (Natursänger!)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP850436.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'O, Caruso!',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP850440.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Salon Orchestra Meier',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP850437.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'God, that Eisenbach!',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP849673.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Fulfilled Wish (Der erfüllte Wunsch)',
        description: 'Moriz Jung (Austrian (born Czechoslovakia) Moravia 1885–1915 Manilowa (Carpathians))',
        artist: 'Moriz Jung',
        imageUrl: 'https://images.metmuseum.org/CRDImages/dp/mobile-large/DP220339.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self-Portrait',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279450.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seated Woman, Back View',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279448.jpg',
        dated: '1917',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nude in Black Stockings',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-13072-001.jpg',
        dated: '1917',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Reclining Nude',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279459.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Street Cart',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279455.jpg',
        dated: '1914',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lilly Steiner',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP324435.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seated Woman in Chemise',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-13071-001.jpg',
        dated: '1914',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nude',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP242757.jpg',
        dated: '1917',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Reclining Nude with Boots',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-1597-001.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Couple Embracing',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279460.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Kiss',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279449.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Torso of a Seated Woman with Boots',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279461.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seminude with Arms Raised',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279456.jpg',
        dated: '1914',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Two Reclining Nudes',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-13070-001.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Observed in a Dream',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-1586-001.jpg',
        dated: '1911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Standing Nude, Facing Right',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279446.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Semi-Dressed Model',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279458.jpg',
        dated: '1917',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Reclining Woman with Raised Skirt',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279453.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Crouching Nude in Shoes and Black Stockings, Back View',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP-13958-001.jpg',
        dated: '1912',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seated Woman in Corset and Boots',
        description: 'Egon Schiele (Austrian, Tulln 1890–1918 Vienna)',
        artist: 'Egon Schiele',
        imageUrl: 'https://images.metmuseum.org/CRDImages/ma/mobile-large/DP279452.jpg',
        dated: '1918',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Arts', null, {});

  }
};
