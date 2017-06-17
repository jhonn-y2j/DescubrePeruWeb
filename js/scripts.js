Vue.use(VueResource);

const BASE_URL = 'http://descubreperu.pe.hu/descubre-peru'
const prov_url = 'http://descubreperu.pe.hu/descubre-peru/list_suppliers.php';
const places_url = 'http://descubreperu.pe.hu/descubre-peru/list_places.php';
const services_url = 'http://descubreperu.pe.hu/descubre-peru/list_services.php';
const tours_url = 'http://descubreperu.pe.hu/descubre-peru/list_tourist.php';
const paquetes_url = 'http://descubreperu.pe.hu/descubre-peru/list_package.php';

const post_proveedor = BASE_URL + 'registrar_proveedor.php'
const post_servicio = BASE_URL + 'registrar_servicio.php'


new Vue({
  el: '#app',
  data: {
    proveedors: [],
    turistas: [],
    services: [],
    paquetes: [],
    places: [],
    entityProv: {
    	business_name: '',
    	ruc: '',
    	address: '',
    	city: '',
    	country: '',
    	phone: '',
    	email: '',
    	representative: '',
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
        help:'',
    },
  },
  mounted: mounted,
  methods:{
  	addProveedor: function (){
  		console.log(this.entityProv);
  		this.$http.post(post_proveedor, this.entityProv).then(response => {
    		console.log(response.body);
    		this.entityProv.business_name = ''
    		this.entityProv.ruc = ''
    		this.entityProv.address = ''
    		this.entityProv.city = ''
    		this.entityProv.phone = ''
    		this.entityProv.country = ''
    		this.entityProv.representative = ''
    		this.entityProv.email = ''
		}, response => {
		    console.log(response);
		});
  	},

    addServicio: function (){
        console.log(this.entityServ);
        this.$http.post(post_servicio, this.entityServ).then(response => {
            console.log(response.body);
            this.entityServ.title = ''
            this.entityServ.type_service_id = ''
            this.entityServ.description = ''
            this.entityServ.place_id = ''
            this.entityServ.supplier_id = ''
        }, response => {
            console.log(response);
        });
    }
  },
});

function mounted () {

    this.$http.get(prov_url).then( response => {
    	this.proveedors = response.body;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(tours_url).then( response => {
    	this.turistas = response.body;
    }).catch( error => {
    	console.log(error);
    });

    this.$http.get(services_url).then( response => {
        this.services = response.body;
        console.log(response.body);
    }).catch( error => {
    	console.log(error);
    })

    this.$http.get(paquetes_url).then( response => {
    	this.paquetes = response.body;
    }).catch( error => {
    	console.log(error);
    })

    this.$http.get(places_url).then( response => {
    	this.places = response.body;
    }).catch( error => {
    	console.log(error);
    })

}

function saveProveedor(data){

}

function saveServicio(data){

}
