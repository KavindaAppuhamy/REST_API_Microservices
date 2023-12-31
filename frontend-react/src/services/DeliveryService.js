import axios from 'axios';

const DELIVERY_API_BASE_URL = "http://localhost:8083/api/v1/deliverys";

class DeliveryService {

    getDeliveries(){
        return axios.get(DELIVERY_API_BASE_URL);
    }

    createDelivery(delivery){
        return axios.post(DELIVERY_API_BASE_URL, delivery);
    }

    getDeliveryById(deliveryId){
        return axios.get(DELIVERY_API_BASE_URL + '/' + deliveryId);
    }

    updateDelivery(delivery, deliveryId){
        return axios.put(DELIVERY_API_BASE_URL + '/' + deliveryId, delivery);
    }

    deleteDelivery(deliveryId){
        return axios.delete(DELIVERY_API_BASE_URL + '/' + deliveryId);
    }
}

export default new DeliveryService()