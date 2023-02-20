import axios from 'axios';
import { env } from '../env';



axios.defaults.headers.common["key"] = env.WEATHER_KEY;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = "http://api.weatherapi.com/v1";