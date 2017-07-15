Vue.use(VueResource);

const BASE_URL = 'http://descubreperu.pe.hu/descubre-peru/';

//listar
const prov_url = BASE_URL + 'list_suppliers.php';
const places_url = BASE_URL + 'list_places.php';
const tours_url = BASE_URL + 'list_tourist.php';
const services_url = BASE_URL + 'list_services.php';
const paquetes_url = BASE_URL + 'list_package.php';
const credit_card_url = BASE_URL + 'list_credit_card.php';
const provEsperando_url = BASE_URL + 'list_suppliers_wait.php';
const assigns_url = BASE_URL + 'list_service_package_detail.php';
const serviciosDeProv_url = BASE_URL + 'list_services_prov.php';

//patch
const approve_supplier = BASE_URL + 'approved_supplier.php';

//crear
const post_proveedor = BASE_URL + 'register_supplier.php';
const post_lugar = BASE_URL + 'register_place.php';
const create_user = BASE_URL + 'register_user.php';
const post_service = BASE_URL + 'register_services.php';
const post_paquete = BASE_URL + 'register_package.php';
const post_serv_pack = BASE_URL + 'register_service_package_detail.php';

//eliminar
const eliminar_proveedor = BASE_URL + 'delete_supplier.php';
const eliminar_lugar = BASE_URL + 'delete_place.php';
const eliminar_turista = BASE_URL + 'delete_tourist.php';
const eliminar_serv_pack = BASE_URL + 'delete_service_package_detail.php';

new Vue({ 
  el: '#app',
  data: () => ({
    drawer: true,
    suppliers: [],
    suppliersWait: [],
    places: [],
    users: [],
    services: [],
    servicesDeProv: [],
    packages: [],
    shoppings:[],
    assigns: [],
    viewItems: 1,
    snackbar: false,
    s: false,
    e: false,
    y: 'top',
    x: 'right',
    timeout: 3000,
    text: 'Confirmación Exitosa',
    headersSuppliers:[
      {text: 'Razon Social', value: 'bussiness', align: 'center'},
      {text: 'RUC', value: 'ruc', align: 'center'},
      {text: 'Ciudad', value: 'city', align: 'center'},
      {text: 'Telefono', value: 'phone', align: 'center'},
      {text: 'Correo', value: 'email', align: 'center'},
      {text: 'Representante', value: 'represent', align: 'center'},
    ],
    headersSuppliersWait:[
      {text: 'Razon Social', value: 'bussiness', align: 'center'},
      {text: 'RUC', value: 'ruc', align: 'center'},
      {text: 'Correo', value: 'email', align: 'center'},
      {text: 'Representante', value: 'represent', align: 'center'},
      {text: 'Aprobar', value: 'approve', align: 'center'},
    ],
    headersPlaces:[
      {text: 'Nombre', value: 'name', align: 'center'},
      {text: 'Descripcion', value: 'description', align: 'center'},
      {text: 'Region', value: 'region', align: 'center'},
      {text: 'Situacion actual', value: 'today', align: 'center'},
    ],
    headersUsers:[
      {text: 'Nombres y Apellidos', value: 'name', align: 'center'},
      {text: 'Correo electronico', value: 'email', align: 'center'},
      {text: 'Nacionalidad', value: 'country', align: 'center'},
      {text: 'Telefono', value: 'phone', align: 'center'},
      {text: 'Fecha Nacimiento', value: 'dateNac', align: 'center'},
    ],
    headersShoppings:[
      {text: 'Cliente', value: 'name', align: 'center'},
      {text: 'Paquete', value: 'packageshop', align: 'center'},
      {text: 'Fecha de compra', value: 'dateshopping', align: 'center'},
      {text: 'Nro Tarjeta', value: 'number_card', align: 'center'},
      {text: 'Fecha de vencimiento tarjeta', value: 'date_venc', align: 'center'},
    ],
    headersPackages:[
      {text: 'Titulo', value: 'title', align: 'center'},
      {text: 'Descripción', value: 'descriptionPack', align: 'center'},
      {text: 'Costo', value: 'costPack', align: 'center'},
      {text: 'Fecha de finalizacion', value: 'dateEnd', align: 'center'},
    ],
    headersServices:[
      {text: 'Servicio', value: 'title', align: 'center'},
      {text: 'Descripción', value: 'description', align: 'center'},
      {text: 'Tipo Servicio', value: 'type_service_id', align: 'center'},
      {text: 'Lugar Turístico', value: 'placeservice', align: 'center'},
      {text: 'Proveedor', value: 'provservice', align: 'center'},
    ],
    
    
    headersServicesDeProv:[
      {text: 'Servicio', value: 'title', align: 'center'},
      {text: 'Descripción', value: 'description', align: 'center'},
      {text: 'Tipo Servicio', value: 'type_service_id', align: 'center'},
      {text: 'Lugar Turístico', value: 'placeservice', align: 'center'},
      {text: 'Proveedor', value: 'provservice', align: 'center'},
    ],
    
    headersAssign: [
      {text: 'Descripción', value: 'descp', align: 'center'},
      {text: 'Costo S/.', value: 'costo', align: 'center'},
    ],
    rubros: [
      {value: 1, text: 'Hotelería'},
      {value: 3, text: 'Restaurante'},
      {value: 4, text: 'Transporte'},
    ],
    promos: [
      {value: 1, text: 'Promo Estandard'},
      {value: 2, text: 'Promo Estudiantes'},
      {value: 3, text: 'Promo Fiestas Patrias'},
      {value: 4, text: 'Promo Fin de Año'},
      {value: 5, text: 'Promo Selva'},
    ],
    search: '',
    pagination: {},
    paginationWait: {},
    paginationPlace: {},
    approve: false,
    selected: [],
    dialog: false,
    cservice: false,
    cpackage: false,
    cassign: false,
    confirm: false,
    modalPlace: false,
    menu: false,
    menuEnd: false,
    entitySupplier:{
        id: '',
        business_name: '',
        ruc: '',
        address: '',
        city: '',
        country: 'PE',
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
        active:'1',
        message:'',
        help:''
    },
    
    entityServDeProv: {
        id:'',
        title: '',
        description: '',
        url_images:'',
        type_service_id: '',
        place_id: '',
        supplier_id: '',
        active:'1',
        message:'',
        help:''
    },
    
    entityPack: {
        title: '',
        description: '',
        day_duration: '',
        init_date:'',
        end_date: '',
        month_celebration: '',
        place_id: '',
        active:'1',
        cost:'',
        promo_id:''
    },
    entityPlace: {
        id:'',
        name: '',
        description: '',
        coordinates:'',
        region: '',
        url_images: 'w',
        url_videos: '',
        available:'1',
        description_warning:'',
        help_warning: ''
    },
    entitySerPack: {
        id: '',
        package_id: '',
        service_id: '',
        description: '',
        cost: ''
    },
    selectObj: '',
  }),
  mounted: mounted,
  methods:{
    changesView(num){
      this.viewItems = num;
      console.log(num);
    },
    addSupplier: function (){
      console.log(this.entitySupplier);
      this.$http.post(post_proveedor, this.entitySupplier).then(response => {
        console.log(response.body);
        this.suppliers.push(this.entitySupplier);
        this.entitySupplier = '';
        this.dialog = false;
      }, response => {
        console.log(response);
      });
    },
    approveSupplier: function (id, index, item){
      console.log(id);
      this.$http.patch(approve_supplier, {id: id}).then(response => {
        console.log(response.body);
        this.$http.post(create_user, {username: item.email, password: '12345678', role: '2', supplier_id: id, active: '1'}).then( response => {
          console.log(response.body);
          this.text = 'Confirmación Exitosa';
          this.snackbar = true;
          this.s = true;
          this.suppliersWait.splice(index, 1);
        }, error => {
          console.log(error);
          this.text = 'Error al confirmar';
          this.e = true;
        });
      }, response => {
        this.text = 'Error al confirmar';
        this.e = true;
        console.log(response);
      });
    },
    addPlace: function (){
        console.log(this.entityPlace);
        this.$http.post(post_lugar, this.entityPlace).then(response => {
            console.log(response.body);
            this.places.push(this.entityPlace);
            this.entityPlace = '';
            this.modalPlace = false;
        }, response => {
            console.log(response);
        });
    },
    addService: function (){
      console.log(this.entityServ);
      this.$http.post(post_service, this.entityServ).then(response => {
          console.log(response.body);
          this.services.push(this.entityServ);
          this.entityServ = '';
          this.cservice = false;
      }, response => {
          console.log(response);
      });
    },
    addPackage: function (){
      console.log(this.entityPack);
      this.$http.post(post_paquete, this.entityPack).then(response => {
          console.log(response.body);
          this.packages.push(this.entityPack);
          this.entityPack = '';
          this.cpackage = false;
      }, response => {
          console.log(response);
      });
    },
    addServPack: function (){
      console.log(this.entitySerPack);
      this.entitySerPack.package_id = this.selectObj.id
      this.$http.post(post_serv_pack, this.entitySerPack).then(response => {
          console.log(response.body);
          this.assigns.push(this.entitySerPack);
          this.entitySerPack = '';
      }, response => {
          console.log(response);
      });
    },
    deleteProveedor: function (id, index){
      console.log(id);
      this.$http.delete(eliminar_proveedor, {body : { id : id}} ).then(response => {
        console.log(response.body);
        this.suppliers.splice(index, 1);
    }, response => {
        console.log(response);
    });
    },
    viewSelectObj: function (p){
        console.log(p);
        this.selectObj = p;
        this.cassign = true;
        this.$http.post(assigns_url, {id : this.selectObj.id}).then( response => {
          this.assigns = response.body.data;
        }).catch( error => {
          console.log(error);
        });
    },
    deleteServPack: function (id, index){
      console.log(id);
      this.$http.delete(eliminar_serv_pack, {body : { id : id}} ).then(response => {
        console.log(response.body);
        this.assigns.splice(index, 1);
      }, response => {
          console.log(response);
      });
    },
    deleteUser: function (id, index){
      console.log(id);
      this.$http.delete(eliminar_turista, {body : { id : id}} ).then(response => {
        console.log(response.body);
        this.users.splice(index, 1);
      }, response => {
          console.log(response);
      });
    },
    deletePlace: function (id, index){
      console.log(id);
      this.$http.delete(eliminar_lugar, {body : { id : id}} ).then(response => {
        console.log(response.body);
        this.places.splice(index, 1);
      }, response => {
          console.log(response);
      });
    },
  }
})

function mounted() {
  this.$http.get(prov_url).then( response => {
    this.suppliers = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(provEsperando_url).then( response => {
    this.suppliersWait = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(places_url).then( response => {
    this.places = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(tours_url).then( response => {
    this.users = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(services_url).then( response => {
    this.services = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(paquetes_url).then( response => {
    this.packages = response.body.data;
  }).catch( error => {
    console.log(error);
  });

  this.$http.get(credit_card_url).then( response => {
    this.shoppings = response.body.data;
  }).catch( error => {
    console.log(error);
  });
  
  this.$http.get(serviciosDeProv_url).then( response => {
    this.servicesDeProv = response.body.data;
  }).catch( error => {
    console.log(error);
  });
}