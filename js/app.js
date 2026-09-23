/**
 * apartmentApp — Alpine.js component for Bonifacio 15 flat rental site.
 *
 * Data strategy:
 *   - On init, fetches resources/building/values.json to get the flat ID list
 *     and building amenities.
 *   - For each flat ID, fetches resources/flats/<id>/values.json for price,
 *     rooms, bathrooms, etc.
 *   - Display-only data that doesn't exist in the JSON files (photo paths,
 *     display names, badge CSS classes, max occupancy) lives in `flatMeta`
 *     below. This is the only place to update when adding a new flat.
 *   - To add a new flat: create the folder + values.json + photos, then add
 *     one entry to `flatMeta` and one <option> in the contact form select.
 */

document.addEventListener('alpine:init', () => {
    Alpine.data('apartmentApp', () => ({

        // ── Loading state ──────────────────────────────────────────────────
        loading: true,
        loadError: false,

        // ── Building data (populated from fetch) ───────────────────────────
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
            amenities: [],
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
                "resources/building/building-01.png",
                "resources/building/building-02.png",
                "resources/building/building-03.png",
                "resources/building/building-04.png",
                "resources/building/building-05.png",
                "resources/building/building-06.png",
                "resources/building/building-07.png",
                "resources/building/building-08.png",
                "resources/building/building-09.png",
                "resources/building/fleming6.jpg"
            ]
        },

        // ── Flat display metadata (photo paths + display names don't live in JSON) ──
        // To add a new flat: add its ID to building/values.json AND add an entry here.
        flatMeta: {
            "bgc15-4c-1": {
                name: "Estudio Práctico Planta 4",
                floor: "Planta 4",
                door: "",
                maxOccupancy: 1,
                statusBadge: "badge-avail-sept",
                coverImage: "resources/flats/bgc15-4c-1/photo-01.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-1/photo-01.jpeg",
                    "resources/flats/bgc15-4c-1/photo-02.jpeg",
                    "resources/flats/bgc15-4c-1/photo-03.jpeg",
                    "resources/flats/bgc15-4c-1/photo-04.jpeg",
                    "resources/flats/bgc15-4c-1/photo-05.jpeg",
                    "resources/flats/bgc15-4c-1/photo-06.jpeg",
                    "resources/flats/bgc15-4c-1/photo-07.jpeg",
                    "resources/flats/bgc15-4c-1/photo-08.jpeg",
                    "resources/flats/bgc15-4c-1/photo-09.jpeg"
                ]
            },
            "bgc15-4c-2": {
                name: "Apartamento 1 Dormitorio Planta 4",
                floor: "Planta 4",
                door: "",
                maxOccupancy: 1,
                statusBadge: "badge-avail-sept",
                coverImage: "resources/flats/bgc15-4c-2/photo-01.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-2/photo-01.jpeg",
                    "resources/flats/bgc15-4c-2/photo-02.jpeg",
                    "resources/flats/bgc15-4c-2/photo-03.jpeg",
                    "resources/flats/bgc15-4c-2/photo-04.jpeg",
                    "resources/flats/bgc15-4c-2/photo-05.jpeg",
                    "resources/flats/bgc15-4c-2/photo-06.jpeg",
                    "resources/flats/bgc15-4c-2/photo-07.jpeg",
                    "resources/flats/bgc15-4c-2/photo-08.jpeg"
                ]
            },
            "bgc15-4c-3": {
                name: "Apartamento 2 Dormitorios Planta 4",
                floor: "Planta 4",
                door: "",
                maxOccupancy: 2,
                statusBadge: "badge-unavailable",
                coverImage: "resources/flats/bgc15-4c-3/photo-01.jpeg",
                photos: [
                    "resources/flats/bgc15-4c-3/photo-01.jpeg",
                    "resources/flats/bgc15-4c-3/photo-02.jpeg",
                    "resources/flats/bgc15-4c-3/photo-03.jpeg",
                    "resources/flats/bgc15-4c-3/photo-04.jpeg",
                    "resources/flats/bgc15-4c-3/photo-05.jpeg",
                    "resources/flats/bgc15-4c-3/photo-06.jpeg",
                    "resources/flats/bgc15-4c-3/photo-07.jpeg",
                    "resources/flats/bgc15-4c-3/photo-08.jpeg",
                    "resources/flats/bgc15-4c-3/photo-09.jpeg",
                    "resources/flats/bgc15-4c-3/photo-10.jpeg",
                    "resources/flats/bgc15-4c-3/photo-11.jpeg",
                    "resources/flats/bgc15-4c-3/photo-12.jpeg"
                ]
            },
            "bgc15-4d": {
                name: "Piso 4 Dormitorios Planta 4",
                floor: "Planta 4",
                door: "",
                maxOccupancy: 4,
                statusBadge: "badge-avail-sept",
                coverImage: "resources/flats/bgc15-4d/photo-01.jpeg",
                photos: [
                    "resources/flats/bgc15-4d/photo-01.jpeg",
                    "resources/flats/bgc15-4d/photo-02.jpeg",
                    "resources/flats/bgc15-4d/photo-03.jpeg",
                    "resources/flats/bgc15-4d/photo-04.jpeg",
                    "resources/flats/bgc15-4d/photo-05.jpeg",
                    "resources/flats/bgc15-4d/photo-06.jpeg",
                    "resources/flats/bgc15-4d/photo-07.jpeg",
                    "resources/flats/bgc15-4d/photo-08.jpeg",
                    "resources/flats/bgc15-4d/photo-09.jpeg",
                    "resources/flats/bgc15-4d/photo-10.jpeg"
                ]
            },
            "dr-flemming-6": {
                name: "Piso 2 Dormitorios Dr. Fleming 6",
                floor: "Planta 3",
                door: "",
                maxOccupancy: 2,
                statusBadge: "badge-avail-aug",
                coverImage: "resources/flats/dr-flemming-6/fleming6hall.jpg",
                photos: [
                    "resources/flats/dr-flemming-6/fleming6hall.jpg",
                    "resources/flats/dr-flemming-6/photo-01.jpeg",
                    "resources/flats/dr-flemming-6/photo-02.jpeg",
                    "resources/flats/dr-flemming-6/photo-03.jpeg",
                    "resources/flats/dr-flemming-6/photo-04.jpeg",
                    "resources/flats/dr-flemming-6/photo-05.jpeg",
                    "resources/flats/dr-flemming-6/photo-07.jpeg",
                    "resources/flats/dr-flemming-6/photo-08.jpeg",
                    "resources/flats/dr-flemming-6/photo-09.jpeg",
                    "resources/flats/dr-flemming-6/photo-10.jpeg",
                    "resources/flats/dr-flemming-6/photo-11.jpeg"
                ]
            }
        },

        // ── Flats list (populated by fetchData) ────────────────────────────
        flats: [],

        // ── Filter state ───────────────────────────────────────────────────
        filterRooms: 'all',

        // Mobile nav state
        mobileNavOpen: false,

        // ── Lightbox state ─────────────────────────────────────────────────
        lightboxOpen: false,
        lightboxImages: [],
        lightboxIndex: 0,
        lightboxTitle: '',
        touchStartX: 0,
        touchEndX: 0,

        // ── Commodities modal state ────────────────────────────────────────
        commoditiesModalOpen: false,
        selectedFlatForCommodities: null,

        // ── Contact modal state ────────────────────────────────────────────
        contactModalOpen: false,
        inquiryTarget: 'Consulta de disponibilidad',

        // WhatsApp — kept in JS only, never rendered in page HTML
        whatsappNumber: "+34627879433",

        // ── Computed ───────────────────────────────────────────────────────
        get filteredFlats() {
            if (this.filterRooms === 'all') return this.flats;
            return this.flats.filter(f => f.rooms === parseInt(this.filterRooms));
        },

        // ── Data fetching ──────────────────────────────────────────────────

        /**
         * Fetches building/values.json then each flat's values.json.
         * Merges JSON data with flatMeta (display-only data).
         * Called automatically by Alpine's init hook (x-init on <body>).
         */
        async fetchData() {
            try {
                // 1. Load building data
                const buildingRes = await fetch('resources/building/values.json');
                if (!buildingRes.ok) throw new Error('No se pudo cargar el edificio.');
                const buildingJson = await buildingRes.json();

                // Map building amenities from JSON to display format
                const amenityIconMap = {
                    'mercadona': 'fa-shopping-cart',
                    'farmacia': 'fa-notes-medical',
                    'bus': 'fa-bus',
                    'tren': 'fa-train',
                    'biblioteca': 'fa-book',
                    'polideportivo': 'fa-dumbbell'
                };

                this.building.amenities = buildingJson.comodities.map(text => {
                    const key = Object.keys(amenityIconMap).find(k => text.toLowerCase().includes(k));
                    return { text: this._capitalize(text), icon: key ? amenityIconMap[key] : 'fa-circle-check' };
                });

                // 2. Load each flat's values.json in parallel
                const flatIds = buildingJson.flats.map(f => f.id);

                // Also include flats not listed in building/values.json but present in flatMeta
                const allIds = [...new Set([...flatIds, ...Object.keys(this.flatMeta)])];

                const flatResults = await Promise.allSettled(
                    allIds.map(id => fetch(`resources/flats/${id}/values.json`).then(r => {
                        if (!r.ok) throw new Error(`404: ${id}`);
                        return r.json().then(data => ({ id, data }));
                    }))
                );

                // 3. Build flat objects by merging JSON + flatMeta
                this.flats = flatResults
                    .filter(r => r.status === 'fulfilled')
                    .map(r => {
                        const { id, data } = r.value;
                        const meta = this.flatMeta[id] || {};

                        return {
                            id,
                            name: meta.name || id,
                            floor: meta.floor || '',
                            door: meta.door || '',
                            maxOccupancy: meta.maxOccupancy || data.rooms?.value || 1,
                            statusBadge: meta.statusBadge || 'badge-avail-sept',
                            coverImage: meta.coverImage || '',
                            photos: meta.photos || [],

                            // From JSON
                            sqm: parseInt(data.price?.sqm) || 0,
                            rooms: data.rooms?.value || 0,
                            livingrooms: data.livingrooms?.value || 0,
                            bathrooms: data.bathrooms?.value || 0,
                            kitchens: data.kitchens?.value || 0,
                            price: data.price?.value || 0,
                            currency: "€",
                            period: "mes",
                            status: this._capitalize(data.status?.trim()) || 'Consultar disponibilidad',
                            description: this._capitalize(data.description) || '',
                            commodities: this._buildCommodities(data, meta)
                        };
                    });

                this.loading = false;

            } catch (err) {
                console.error('Error cargando datos:', err);
                this.loadError = true;
                this.loading = false;
            }
        },

        /**
         * Builds the commodities array from JSON comodities + enriched display names.
         */
        _buildCommodities(data, meta) {
            const commodityDisplayMap = {
                'amueblado': 'Amueblado',
                'ropa de cama': 'Ropa de cama',
                'toallas': 'Toallas',
                'calefaccion': 'Calefacción (Gasto extra en invierno)',
                'lavadora': 'Lavadora',
                'vitroceramica': 'Vitrocerámica',
                'nevera': 'Nevera',
                'microondas': 'Microondas',
                'tv': 'TV'
            };

            const base = (data.comodities || []).map(c => commodityDisplayMap[c.toLowerCase()] || this._capitalize(c));

            // Prepend WiFi (always included, not in JSON)
            const result = ['Internet WiFi (Incluido)', ...base];

            // Add contextual items based on JSON fields
            if (data.livingrooms?.value) result.splice(1, 0, `${data.livingrooms.value} Salón independiente`);
            if (data.rooms?.value > 1) result.splice(1, 0, `${data.rooms.value} Dormitorios`);
            if (data.bathrooms?.value > 1) result.splice(1, 0, `${data.bathrooms.value} Baños`);

            return result;
        },

        /**
         * Capitalises the first letter of a string.
         */
        _capitalize(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        // ── Lightbox actions ───────────────────────────────────────────────

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

        // ── Touch swipe for lightbox ───────────────────────────────────────

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

        // ── Commodities modal ──────────────────────────────────────────────

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
            if (text.includes('salón') || text.includes('salon')) return 'fa-couch';
            if (text.includes('baño') || text.includes('bano')) return 'fa-bath';
            return 'fa-circle-check';
        },

        // ── Contact modal ──────────────────────────────────────────────────

        openContactModal(flatName = null) {
            this.inquiryTarget = flatName || 'Consulta de disponibilidad';
            this.contactModalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeContactModal() {
            this.contactModalOpen = false;
            document.body.style.overflow = 'auto';
        }
    }));
});
