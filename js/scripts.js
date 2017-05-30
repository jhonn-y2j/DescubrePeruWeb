Vue.use(VueResource);

const BASE_URL = 'http://descubreperu.pe.hu/descubreperu/'
const prov_url = 'http://descubreperu.pe.hu/descubreperu/lista_proveedores.php';
const places_url = 'http://descubreperu.pe.hu/descubreperu/lista_lugares.php';
const services_url = 'http://descubreperu.pe.hu/descubreperu/lista_servicios.php';
const tours_url = 'http://descubreperu.pe.hu/descubreperu/lista_turistas.php';
const paquetes_url = 'http://descubreperu.pe.hu/descubreperu/lista_paquetes.php';

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
    	razon_social: '',
    	ruc: '',
    	prov_direccion: '',
    	prov_ciudad: '',
    	prov_pais: '',
    	prov_telefono: '',
    	prov_correo: '',
    	representante_legal: '',
    },
    entityServ: {
        serv_nombre: '',
        serv_tipo: '',
        serv_descripcion: '',
        lugartur_id: '',
        prov_id: '',
    },
  },
  mounted: mounted,
  methods:{
  	addProveedor: function (){
  		console.log(this.entityProv);
  		this.$http.post(post_proveedor, this.entityProv).then(response => {
    		console.log(response.body);
    		this.entityProv.razon_social = ''
    		this.entityProv.ruc = ''
    		this.entityProv.prov_direccion = ''
    		this.entityProv.prov_ciudad = ''
    		this.entityProv.prov_telefono = ''
    		this.entityProv.prov_pais = ''
    		this.entityProv.representante_legal = ''
    		this.entityProv.prov_correo = ''
		}, response => {
		    console.log(response);
		});
  	},

    addServicio: function (){
        console.log(this.entityServ);
        this.$http.post(post_servicio, this.entityServ).then(response => {
            console.log(response.body);
            this.entityServ.serv_nombre = ''
            this.entityServ.serv_tipo = ''
            this.entityServ.serv_descripcion = ''
            this.entityServ.lugartur_id = ''
            this.entityServ.prov_id = ''
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
