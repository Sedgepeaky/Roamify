const categories = [
  "Amazing views",
  "Cabins",
  "Beachfront",
  "Farms",
  "Lake",
  "Trending",
  "Countryside",
  "Luxury",
];

const listings = [
  {
    id: 1,
    title: "Cozy Beachfront Cottage",
    location: "Malibu, United States",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Modern Loft in Downtown",
    location: "New York, United States",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Mountain Retreat",
    location: "Aspen, United States",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Historic Villa in Tuscany",
    location: "Florence, Italy",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Rustic Cabin by the Lake",
    location: "Lake Tahoe, United States",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Tropical Villa in Phuket",
    location: "Phuket, Thailand",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "Art Deco Apartment",
    location: "Miami, United States",
    price: 1600,
    image:
      "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "Lakefront Cabin",
    location: "New Hampshire, United States",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=1000&q=80",
  },
];

function App() {
  return (
    <main className="page">
      <header className="navbar">
        <div className="brand">Roamify</div>
        <div className="searchbar">
          <input placeholder="Search destinations" />
          <button type="button">Search</button>
        </div>
        <div className="nav-actions">
          <button type="button" className="link-btn">Log in</button>
          <button type="button" className="solid-btn">Sign up</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Explore. Stay. Experience.</p>
          <h1>Find your next unforgettable stay</h1>
          <p className="hero-copy">
            Discover unique homes, villas, cabins, and apartments across the world.
          </p>
        </div>
      </section>

      <section className="category-row">
        {categories.map((category) => (
          <button key={category} type="button" className="chip">
            {category}
          </button>
        ))}
      </section>

      <section className="listing-grid">
        {listings.map((listing) => (
          <article key={listing.id} className="card">
            <img src={listing.image} alt={listing.title} />
            <div className="card-body">
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <strong>Rs {listing.price.toLocaleString()} / night</strong>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
