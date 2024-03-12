import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCitiesContext } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first country by clicking on the map" />;

  const countriesSet = new Set();

  const countries = cities.reduce((arr, city) => {
    if (!countriesSet.has(city.country)) {
      countriesSet.add(city.country);
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
