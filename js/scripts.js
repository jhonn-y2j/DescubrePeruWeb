Vue.use(VueResource);

const BASE_URL = 'http://descubreperu.pe.hu/descubre-peru';

const prov_url = 'http://descubreperu.pe.hu/descubre-peru/list_suppliers.php';
const places_url = 'http://descubreperu.pe.hu/descubre-peru/list_places.php';
const services_url = 'http://descubreperu.pe.hu/descubre-peru/list_services.php';
const tours_url = 'http://descubreperu.pe.hu/descubre-peru/list_tourist.php';
const paquetes_url = 'http://descubreperu.pe.hu/descubre-peru/list_package.php';
const credit_card_url = 'http://descubreperu.pe.hu/descubre-peru/list_credit_card.php';


const post_proveedor = BASE_URL + '/register_supplier.php';
const post_servicio = BASE_URL + '/register_services.php';
const post_paquete = BASE_URL + '/register_package.php';
const post_lugar = BASE_URL + '/register_place.php';
const post_credit_card = BASE_URL + '/register_credit_card.php';



const actualizar_proveedor = BASE_URL + '/update_supplier.php';
const actualizar_servicio = BASE_URL + '/update_services.php';
const actualizar_paquete = BASE_URL + '/update_package.php';
const actualizar_lugar = BASE_URL + '/update_place.php';

new Vue({
  el: '#app',
  data: {
    proveedors: [],
    turistas: [],
    services: [],
    paquetes: [],
    places: [],
    credit_card:[],
    entityProv: {
    	business_name: '',
    	ruc: '',
    	address: '',
    	city: '',
    	country: '',
    	phone: '',
    	email: '',
    	representative: ''
    },
    entityServ: {
        id:'',
        title: '',
        description: '',
        url_images:'',
        type_service_id: '',
        place_id: '',
        supplier_id: '',
        active:'',
        message:'',
        help:''
    },

    entityPlace: {
        id:'',
        name: '',
        description: '',
        coordinates:'',
        region: '',
        url_images: '',
        url_videos: '',
        available:'',
        description_warning:'',
        help_warning:''
    },

    entityPack: {
        title: '',
        description: '',
        init_date:'',
        end_date: '',
        place_id: '',
        active:'',
        cost:'',
        promo_id:''
    },
    
   entityCreditCard: {
        date_venc: '',
        currency_date: '',
        ccv:'',
        name: '',
        email: '',
        number_card:'',
        amount:'',
        currency_code:'',
        token:'',
        phone_number: '',
        country_code: '',
        address_city:'',
        address:'',
        package_id:'',
        tourist_id:''
    } 

  },
  mounted: mounted,
  methods:{
  	addProveedor: function (){
  		console.log(this.entityProv);
  		this.$http.post(post_proveedor, this.entityProv).then(response => {
    		console.log(response.body);
    		this.entityProv.business_name = '';
    		this.entityProv.ruc = '';
    		this.entityProv.address = '';
    		this.entityProv.city = '';
    		this.entityProv.phone = '';
    		this.entityProv.country = '';
    		this.entityProv.representative = '';
    		this.entityProv.email = '';
		}, response => {
		    console.log(response);
		});
  	},

    addServicio: function (){
        console.log(this.entityServ);
        this.$http.post(post_servicio, this.entityServ).then(response => {
            console.log(response.body);
            this.entityServ.title = '';
            this.entityServ.type_service_id = '';
            this.entityServ.description = '';
            this.entityServ.place_id = '';
            this.entityServ.supplier_id = '';
        }, response => {
            console.log(response);
        });
    },


    addLugar: function (){
        console.log(this.entityPlace);
        this.$http.post(post_lugar, this.entityPlace).then(response => {
            console.log(response.body);
            this.entityPlace.name = '';
            this.entityPlace.description = '';
            this.entityPlace.coordinates = '';
            this.entityPlace.region = '';
            this.entityPlace.url_images = '';
            this.entityPlace.url_videos = '';
            this.entityPlace.available = '';
            this.entityPlace.description_warning = '';
            this.entityPlace.help_warning = '';
        }, response => {
            console.log(response);
        });
    },

    addPaquete: function (){
        console.log(this.entityPack);
        this.$http.post(post_paquete, this.entityPack).then(response => {
            console.log(response.body);
            this.entityPack.title = '';
            this.entityPack.description = '';
            this.entityPack.init_date = '';
            this.entityPack.end_date = '';
            this.entityPack.place_id = '';
            this.entityPack.cost = '';
            this.entityPack.promo_id = '';
        }, response => {
            console.log(response);
        });
    },
    
    addCreditCard: function (){
        console.log(this.entityCreditCard);
        this.$http.post(post_credit_card, this.entityCreditCard).then(response => {
            console.log(response.body);
            this.entityCreditCard.date_venc = '';
            this.entityCreditCard.currency_date = '';
            this.entityCreditCard.ccv = '';
            this.entityCreditCard.name= '';
            this.entityCreditCard.email= '';
            this.entityCreditCard.number_card='';
            this.entityCreditCard.amount='';
            this.entityCreditCard.currency_code='';
            this.entityCreditCard.token='';
            this.entityCreditCard.phone_number= '';
            this.entityCreditCard.country_code= '';
            this.entityCreditCard.address_city='';
            this.entityCreditCard. address='';
            this.entityCreditCard.package_id='';
            this.entityCreditCard.tourist_id='';
        }, response => {
            console.log(response);
        });
    },
    
    updateServicio: function (){
        console.log(this.entityServ);
        this.$http.post(actualizar_servicio, this.entityServ).then(response => {
            console.log(response.body);
            this.entityServ.title = '';
            this.entityServ.type_service_id = '';
            this.entityServ.description = '';
            this.entityServ.place_id = '';
            this.entityServ.supplier_id = '';
        }, response => {
            console.log(response);
        });
    }
  
  }


});

function mounted () {

    this.$http.get(prov_url).then( response => {
    	this.proveedors = response.body.data;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(tours_url).then( response => {
    	this.turistas = response.body.data;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(services_url).then( response => {
        this.services = response.body.data;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(paquetes_url).then( response => {
    	this.paquetes = response.body.data;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(places_url).then( response => {
    	this.places = response.body.data;
    }).catch( error => {
    	console.log(error);
    });
    
    this.$http.get(credit_card_url).then( response => {
    	this.credit_card = response.body.data;
    }).catch( error => {
    	console.log(error);
    });


}

function saveProveedor(data){

}

function saveServicio(data){

}



function saveServicio(data){

}

function savePaquete(data){

}

