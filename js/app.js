document.addEventListener('alpine:init', () => {
    Alpine.data('apartmentApp', () => ({
        // Datos del Edificio y Ubicación
        building: {
            name: "Pisos Bonifacio 15",
            address: {
                street: "Bonifacio González Carreño",
                number: "15",
                city: "Langreo",
                province: "Asturias",
                country: "España",
                postal_code: "33900",
                full: "Calle Bonifacio González Carreño 15, 33900 Langreo, Asturias"
            },
            amenities: [
                { text: "Mercadona a 3 minutos a pie", icon: "fa-shopping-cart" },
                { text: "Farmacia a 3 minutos a pie", icon: "fa-notes-medical" },
                { text: "Parada de autobús a 2 minutos", icon: "fa-bus" },
                { text: "Estación de Tren Cercanías a 5 minutos", icon: "fa-train" },
                { text: "Biblioteca municipal a 15 minutos", icon: "fa-book" },
                { text: "Polideportivo municipal a 15 minutos", icon: "fa-dumbbell" }
            ],
            workerBenefits: [
                { title: "Internet WiFi Incluido", desc: "Conexión a internet incluida en el precio para que puedas trabajar o navegar.", icon: "fa-wifi" },
                { title: "Factura Oficial para Empresas", desc: "Emitimos factura oficial de alquiler para justificación de gastos.", icon: "fa-file-invoice" },
                { title: "Listo para Entrar a Vivir", desc: "Totalmente amueblados, con ropa de cama y toallas incluidas.", icon: "fa-key" },
                { title: "Flexibilidad por Meses", desc: "Pensado para contratos de obra, proyectos temporales y desplazamientos de trabajo.", icon: "fa-calendar-alt" },
                { title: "Buena Ubicación y Comunicación", desc: "En el centro de Langreo, con transporte a Oviedo, Gijón y polígonos.", icon: "fa-map-marked-alt" },
                { title: "Trato Directo sin Comisiones", desc: "Contacto directo con el propietario, sin gastos de agencia.", icon: "fa-user-check" }
            ],
            photos: [
                "resources/building/main.png",
                "resources/building/Screenshot 2026-07-30 at 17.04.45.png",
                "resources/building/Screenshot 2026-07-30 at 17.04.51.png",
                "resources/building/Screenshot 2026-07-30 at 17.05.07.png",
                "resources/building/Screenshot 2026-07-30 at 14.19.03.png",
                "resources/building/Screenshot 2026-07-30 at 14.17.04.png",
                "resources/building/Screenshot 2026-07-30 at 14.18.31.png",
                "resources/building/Screenshot 2026-07-30 at 14.11.20.png",
                "resources/building/Screenshot 2026-07-30 at 14.23.22.png",
                "resources/building/Screenshot 2026-07-30 at 14.23.45.png"
            ]
        },

        // Datos de Pisos y Habitaciones
        flats: [
            {
                id: "bgc15-4c-1",
                name: "Estudio Práctico 4º-1",
                floor: "Planta 4",
                door: "Puerta 1",
                sqm: 20,
                rooms: 1,
                bathrooms: 1,
                kitchens: 1,
                maxOccupancy: 1,
                price: 500,
                currency: "€",
                period: "mes",
                status: "Disponible Sep 2026",
                statusBadge: "badge-avail-sept",
                description: "Apartaestudio acogedor y práctico. Capacidad máxima para 1 persona. Ideal para un trabajador o técnico desplazado.",
                commodities: ["Internet WiFi (Incluido)", "Amueblado", "Ropa de cama", "Toallas", "Lavadora", "Vitrocerámica", "Nevera", "Microondas", "TV", "Calefacción (Gasto extra en invierno)"],
                coverImage: "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30.jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (1).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (2).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (3).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (4).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (5).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (6).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (7).jpeg",
                    "resources/flats/bgc15-4c-1/WhatsApp Image 2026-07-30 at 12.38.30 (8).jpeg"
                ]
            },
            {
                id: "bgc15-4c-2",
                name: "Apartamento 1D 4º-2",
                floor: "Planta 4",
                door: "Puerta 2",
                sqm: 40,
                rooms: 1,
                livingrooms: 1,
                bathrooms: 1,
                kitchens: 1,
                maxOccupancy: 1,
                price: 600,
                currency: "€",
                period: "mes",
                status: "Disponible Sep 2026",
                statusBadge: "badge-avail-sept",
                description: "Apartamento de 40m² con salón independiente, cocina y dormitorio. Capacidad máxima para 1 persona.",
                commodities: ["Internet WiFi (Incluido)", "Salón independiente", "Amueblado", "Ropa de cama", "Toallas", "Lavadora", "Vitrocerámica", "Nevera", "Microondas", "TV", "Calefacción (Gasto extra en invierno)"],
                coverImage: "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30.jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30 (1).jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30 (2).jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30 (3).jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.30 (4).jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.31.jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.31 (1).jpeg",
                    "resources/flats/bgc15-4c-2/WhatsApp Image 2026-07-30 at 12.23.31 (2).jpeg"
                ]
            },
            {
                id: "bgc15-4c-3",
                name: "Apartamento 2D 4º-3",
                floor: "Planta 4",
                door: "Puerta 3",
                sqm: 50,
                rooms: 2,
                bathrooms: 1,
                kitchens: 1,
                maxOccupancy: 2,
                price: 800,
                currency: "€",
                period: "mes",
                status: "Disponible Agosto 2026",
                statusBadge: "badge-avail-aug",
                description: "Piso completo de 50m² con 2 habitaciones independientes, cocina y baño. Capacidad máxima para 2 personas.",
                commodities: ["Internet WiFi (Incluido)", "2 Dormitorios", "Amueblado", "Ropa de cama", "Toallas", "Lavadora", "Vitrocerámica", "Nevera", "Microondas", "TV", "Calefacción (Gasto extra en invierno)"],
                coverImage: "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.39.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.39.jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.40.jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.40 (1).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.40 (2).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.40 (3).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.41.jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.41 (1).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.42.jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.42 (1).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.42 (2).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.42 (3).jpeg",
                    "resources/flats/bgc15-4c-3/WhatsApp Image 2026-07-30 at 12.44.42 (4).jpeg"
                ]
            }
        ],

        // Estado del Filtro
        filterRooms: 'all',
        selectedFlat: null,

        // Lightbox state
        lightboxOpen: false,
        lightboxImages: [],
        lightboxIndex: 0,
        lightboxTitle: '',
        touchStartX: 0,
        touchEndX: 0,

        // Commodities Modal State
        commoditiesModalOpen: false,
        selectedFlatForCommodities: null,

        // Contact Modal State
        contactModalOpen: false,
        inquiryTarget: 'General',
        formSubmitted: false,
        formData: {
            company: '',
            name: '',
            phone: '',
            email: '',
            flatId: 'all',
            stayDuration: '1-3 meses',
            comments: ''
        },

        // Contact Details
        contactEmail: "baufcontrol@gmail.com",

        // Computed properties
        get filteredFlats() {
            if (this.filterRooms === 'all') {
                return this.flats;
            }
            return this.flats.filter(f => f.rooms === parseInt(this.filterRooms));
        },

        // Lightbox actions
        openLightbox(images, index = 0, title = 'Galería de fotos') {
            this.lightboxImages = images;
            this.lightboxIndex = index;
            this.lightboxTitle = title;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = 'auto';
        },

        nextPhoto() {
            if (this.lightboxImages.length === 0) return;
            this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
        },

        prevPhoto() {
            if (this.lightboxImages.length === 0) return;
            this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
        },

        // Touch swipe handling for Lightbox
        handleTouchStart(e) {
            this.touchStartX = e.changedTouches[0].screenX;
        },
        handleTouchEnd(e) {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        },
        handleSwipe() {
            const swipeThreshold = 40;
            if (this.touchEndX < this.touchStartX - swipeThreshold) {
                this.nextPhoto();
            } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
                this.prevPhoto();
            }
        },

        // Commodities Modal actions
        openCommoditiesModal(flat) {
            this.selectedFlatForCommodities = flat;
            this.commoditiesModalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeCommoditiesModal() {
            this.commoditiesModalOpen = false;
            document.body.style.overflow = 'auto';
        },

        getCommodityIcon(commodity) {
            const text = commodity.toLowerCase();
            if (text.includes('wifi') || text.includes('internet')) return 'fa-wifi';
            if (text.includes('amueblado') || text.includes('dormitorio') || text.includes('habitaci')) return 'fa-bed';
            if (text.includes('ropa de cama')) return 'fa-mattress-pillow';
            if (text.includes('toalla')) return 'fa-shower';
            if (text.includes('lavadora')) return 'fa-soap';
            if (text.includes('vitro') || text.includes('cocina')) return 'fa-fire-burner';
            if (text.includes('nevera')) return 'fa-box';
            if (text.includes('microondas')) return 'fa-kitchen-set';
            if (text.includes('tv')) return 'fa-tv';
            if (text.includes('calefacci')) return 'fa-snowflake';
            if (text.includes('salón')) return 'fa-couch';
            return 'fa-circle-check';
        },

        // Modal de contacto
        openContactModal(flatName = null, flatId = 'all') {
            this.inquiryTarget = flatName ? `Consulta sobre: ${flatName}` : 'Consulta de Disponibilidad y Precios';
            if (flatId) this.formData.flatId = flatId;
            this.formSubmitted = false;
            this.contactModalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeContactModal() {
            this.contactModalOpen = false;
            document.body.style.overflow = 'auto';
        },

        submitForm() {
            this.formSubmitted = true;
            setTimeout(() => {
                const subject = encodeURIComponent(`Consulta Alquiler Trabajadores - ${this.formData.name || 'Interesado'}`);
                const body = encodeURIComponent(
                    `Hola,\n\nMe gustaría solicitar información sobre el alquiler de pisos para trabajadores en Langreo.\n\n` +
                    `Empresa / Referencia: ${this.formData.company}\n` +
                    `Contacto: ${this.formData.name}\n` +
                    `Teléfono: ${this.formData.phone}\n` +
                    `Email: ${this.formData.email}\n` +
                    `Piso de interés: ${this.formData.flatId}\n` +
                    `Duración estimada: ${this.formData.stayDuration}\n` +
                    `Notas: ${this.formData.comments}\n\n` +
                    `Gracias.`
                );
                window.location.href = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
            }, 600);
        }
    }));
});
