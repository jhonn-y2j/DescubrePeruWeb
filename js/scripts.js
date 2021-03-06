Vue.use(VueResource);

const BASE_URL = 'http://descubreperu.pe.hu/descubre-peru';

const prov_url = 'http://descubreperu.pe.hu/descubre-peru/list_suppliers.php';
const provEsperando_url = 'http://descubreperu.pe.hu/descubre-peru/list_suppliers_wait.php';
const places_url = 'http://descubreperu.pe.hu/descubre-peru/list_places.php';
const services_url = 'http://descubreperu.pe.hu/descubre-peru/list_services.php';
const tours_url = 'http://descubreperu.pe.hu/descubre-peru/list_tourist.php';
const paquetes_url = 'http://descubreperu.pe.hu/descubre-peru/list_package.php';
const credit_card_url = 'http://descubreperu.pe.hu/descubre-peru/list_credit_card.php';

const confirmar_proveedor = 'http://descubreperu.pe.hu/descubre-peru/confirm_supplier.php';

const post_proveedor = BASE_URL + '/register_supplier.php';
const post_servicio = BASE_URL + '/register_services.php';
const post_paquete = BASE_URL + '/register_package.php';
const post_lugar = BASE_URL + '/register_place.php';
const post_credit_card = BASE_URL + '/register_credit_card.php';
const post_proveedor_waiting = BASE_URL + '/register_supplier_waiting.php';

const actualizar_proveedor = BASE_URL + '/update_supplier.php';
const actualizar_servicio = BASE_URL + '/update_services.php';
const actualizar_paquete = BASE_URL + '/update_package.php';
const actualizar_lugar = BASE_URL + '/update_place.php';
const actualizar_credit_card = BASE_URL + '/update_credit_card.php';

const eliminar_proveedor = BASE_URL + '/delete_supplier.php';
const eliminar_servicio= BASE_URL + '/delete_services.php';
const eliminar_paquete = BASE_URL + '/delete_package.php';
const eliminar_lugar = BASE_URL + '/delete_place.php';
const eliminar_credit_card = BASE_URL + '/delete_credit_card.php';
const eliminar_turista = BASE_URL + '/delete_tourist.php';


new Vue({
  el: '#app',
  data: {
    proveedors: [],
    proveedorsWaiting: [],
    turistas: [],
    rubros: [],
    services: [],
    paquetes: [],
    places: [],
    credit_card:[],
    selected: '',
    erubro: [],
    entityProv: {
        id: '',
    	business_name: '',
    	ruc: '',
    	address: '',
    	city: '',
    	country: '',
    	phone: '',
    	email: '',
    	representative: '',
        items: '',
        provided: ''
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
        tourist_id:'',
        approved:''
    } 

  },
  mounted: mounted,
  updated: function(){
    $('select').material_select();
  },
  methods:{
  	addProveedor: function (){
  		console.log(this.entityProv);
  		this.$http.post(post_proveedor, this.entityProv).then(response => {
    		console.log(response.body);
            this.proveedors.push(this.entityProv);
    		this.entityProv = '';
		}, response => {
		    console.log(response);
		});
  	},
        
        addProveedorWaiting: function (){
  		console.log(this.entityProv);
        this.entityProv.items = this.erubro.toString();
  		this.$http.post(post_proveedor_waiting, this.entityProv).then(response => {
    		console.log(response.body);
            this.proveedors.push(this.entityProv);
    		this.entityProv = '';
		}, response => {
		    console.log(response);
		});
  	},
        
     updateProveedor: function (proveedor){
  		this.$http.put(actualizar_proveedor, this.selected).then(response => {
    		console.log(this.selected);
            this.selected = '';
		}, response => {
		    console.log(response);
		});
  	},
        
    deleteProveedor: function (proveedor,obj){
  		console.log(proveedor);
  		this.$http.delete(eliminar_proveedor, {body : { id : proveedor}} ).then(response => {
    		console.log(response.body);
                this.proveedors.pop(obj);
		}, response => {
		    console.log(response);
		});
    },
    
    confirmProveedor: function (proveedor){
  		this.$http.put(confirmar_proveedor, this.selected).then(response => {
    		console.log(this.selected);
            this.selected = '';
		}, response => {
		    console.log(response);
		});
  	},
        
        
    addServicio: function (){
        console.log(this.entityServ);
        this.$http.post(post_servicio, this.entityServ).then(response => {
            console.log(response.body);
            this.services.push(this.entityServ);
            this.entityServ = '';
            this.entityServ.title = '';
            this.entityServ.type_service_id = '';
            this.entityServ.description = '';
            this.entityServ.place_id = '';
            this.entityServ.supplier_id = '';
        }, response => {
            console.log(response);
        });
    },
    
     updateServicio: function (servicio){
  		this.$http.put(actualizar_servicio, this.selected).then(response => {
    		console.log(this.selected);
            this.selected = '';
		}, response => {
		    console.log(response);
		});
  	},

    deleteServicio: function (servicio){
  		console.log(servicio);
  		this.$http.delete(eliminar_servicio, {body : { id : servicio}} ).then(response => {
    		console.log(response.body);
		}, response => {
		    console.log(response);
		});
    },
    
    
    addLugar: function (){
        console.log(this.entityPlace);
        this.$http.post(post_lugar, this.entityPlace).then(response => {
            console.log(response.body);
            this.places.push(this.entityPlace);
            this.entityPlace = '';
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

    updateLugar: function (lugar){
        this.$http.put(actualizar_lugar, this.selected).then(response => {
            console.log(this.selected);
            this.selected = '';
        }, response => {
            console.log(response);
        });
    },
    
    deleteLugar: function (lugar){
  		console.log(lugar);
  		this.$http.delete(eliminar_lugar, {body : { id : lugar}} ).then(response => {
    		console.log(response.body);
		}, response => {
		    console.log(response);
		});
    },
    
    addPaquete: function (){
        console.log(this.entityPack);
        this.$http.post(post_paquete, this.entityPack).then(response => {
            console.log(response.body);
            this.paquetes.push(this.entityPack);
    		this.entityPack = '';
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
    
     updatePaquete: function (paquete){
  		this.$http.put(actualizar_paquete, this.selected).then(response => {
    		console.log(this.selected);
            this.selected = '';
		}, response => {
		    console.log(response);
		});
  	},
    
    deletePaquete: function (paquete){
  		console.log(paquete);
  		this.$http.delete(eliminar_paquete, {body : { id : paquete}} ).then(response => {
    		console.log(response.body);
		}, response => {
		    console.log(response);
		});
    },
    
    addCreditCard: function (){
        console.log(this.entityCreditCard);
        this.$http.post(post_credit_card, this.entityCreditCard).then(response => {
            console.log(response.body);
            this.credit_card.push(this.entityCreditCard);
            this.entityCreditCard = '';
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
            this.entityCreditCard.approved='';
        }, response => {
            console.log(response);
        });
    },
    
    updateCreditCard: function (credit_card){
  		this.$http.put(actualizar_credit_card, this.selected).then(response => {
    		console.log(this.selected);
            this.selected = '';
		}, response => {
		    console.log(response);
		});
  	},
    
    deleteCreditCard: function (credit_card){
  		console.log(credit_card);
  		this.$http.delete(eliminar_credit_card, {body : { id : credit_card}} ).then(response => {
    		console.log(response.body);
		}, response => {
		    console.log(response);
		});
    },
    
    deleteTurista: function (turista, obj, index){
  		console.log(turista);
  		this.$http.delete(eliminar_turista, {body : { id : turista}} ).then(response => {
    		console.log(response.body);
                console.log(index);
                this.turistas.splice(index, 1);
		}, response => {
		    console.log(response);
		});
    },
    
    enviarMensaje: function (){
    },
    
    viewObj: function (p){
        this.selected = p;
    }
  
  },
  updated: function (){
    $('select').material_select();
  }

});

function mounted () {

    this.$http.get(prov_url).then( response => {
    	this.proveedors = response.body.data;
    }).catch( error => {
    	console.log(error);
    });
    
    this.$http.get(provEsperando_url).then( response => {
    	this.proveedorsWaiting = response.body.data;
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

