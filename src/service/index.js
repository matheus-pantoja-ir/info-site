import axios from 'axios'

const getEventList = () => axios.get('https://site.ingressorapido.com.br/_services/ingressorapido/site/home/canceled_events')

export default { getEventList }