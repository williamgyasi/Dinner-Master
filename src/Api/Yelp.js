import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer HfQrr0jIW99NED3ruU_-GBILPmgK0d2WMXIbo0Wg_Yj_kKur-Jx3WL4Mv-CJR0_h7PFf6d1djFut995ROt5b6O3JzZBay1C1dgVgY0_URoiZsi8_Za2CWzQNARAuX3Yx'
    }
    
})