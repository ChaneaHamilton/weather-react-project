import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              class="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>

          <main>
            <div className="weather-app-data">
              <div>
                <h1 className="weather-app-city"></h1>
                <p className="weather-app-details">
                  <span></span> <span>,</span>
                </p>
                <br />
                Humidity: <span className="humidity-percent"> 0</span> %, Wind{" "}
                <span className="windspeed">0</span> km/h
              </div>

              <div className="weather-app-temperature-container">
                <div></div>
                <div className="weather-app-temperature">70</div>
                <div className="weather-app-unit">°F</div>
              </div>
            </div>

            <div className="weather-forecast"></div>
          </main>

          <footer>
            This project was coded by
            <a href="https://github.com/ChaneaHamilton" target="_blank">
              Chanea Hamilton
            </a>
            , is opened sourced on
            <a
              href="https://github.com/ChaneaHamilton/new-weather-app"
              target="_blank"
            >
              Github
            </a>
            and hosted on
            <a
              href="https://chaneas-updated-weather-app.netlify.app/"
              target="_blank"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
