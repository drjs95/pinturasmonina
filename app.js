// ==============================================
// PINTURAS MONINA RANCAGUA - APP PRINCIPAL
// Tienda Online de Pinturas - Versión 2.0
// ==============================================

class PinturasStore {
    constructor() {
        // PRODUCTOS CON PRECIOS (IVA INCLUIDO)
        this.productos = [
            // ESMALTES 20L - PRECIOS ACTUALIZADOS
            { 
                id: 1, 
                nombre: 'Esmalte al Agua Profesional Tineta 20L', 
                precios: {
                    blanco: { 
                        satinado: 68000,     // $68.000
                        semibrillo: 98000,   // $98.000
                        repelente: 100000    // $100.000
                    },
                    color: { 
                        satinado: 88000,     // $88.000
                        semibrillo: 108000,  // $108.000 
                        repelente: 100000    // $100.000
                    },
                    especial: { 
                        satinado: 104000,    
                        semibrillo: 143000,  
                        repelente: 154000   
                    }
                },
                categoria: 'esmaltes', 
                stock: 42, 
                imagenes: ['https://i.ibb.co/N21tYTNb/tineta-1.png'],
                descripcion: 'Esmalte de alta calidad para interiores y exteriores. Resistente al agua, lavable y de fácil aplicación. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo y/o pistola',
                        'Rendimiento': '70 m² (2 manos)',
                        'Recomendaciones': 'Interior y exterior'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '2 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Lavable': 'Sí',
                        'Resistencia UV': 'Excelente',
                        'Repelencia al agua': 'Sí (según terminación)',
                        'Resistencia química': 'Buena'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // ESMALTE 4L - PRECIOS PROPORCIONALES
            { 
                id: 2, 
                nombre: 'Esmalte al Agua Galón 4L', 
                precios: {
                    blanco: { 
                        satinado: 18000,
                        semibrillo: 24000,
                        repelente: 30000
                    },
                    color: { 
                        satinado: 22000,
                        semibrillo: 28000,
                        repelente: 30000
                    },
                    especial: { 
                        satinado: 30000,
                        semibrillo: 38000,
                        repelente: 38000
                    }
                },
                categoria: 'esmaltes', 
                subcategoria: '4-litros',
                stock: 25, 
                imagenes: ['https://i.ibb.co/h11HfKgc/galon-2.png'],
                descripcion: 'Esmalte al agua de 4 litros para proyectos pequeños, retoques y muebles. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo y/o pistola',
                        'Rendimiento': '17 m² (2 manos)',
                        'Recomendaciones': 'Interior y exterior'
                    },
                    tecnicas: {
                        'Secado al tacto': '1 hora',
                        'Secado total': '24 horas',
                        'Entre capas': '1 hora',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Lavable': 'Sí',
                        'Resistencia UV': 'Buena',
                        'Repelencia al agua': 'Sí (según terminación)',
                        'Resistencia química': 'Alta'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // LÁTEX 20L
            { 
                id: 3, 
                nombre: 'Látex Extracubriente Tineta 20L', 
                precio: 55000,
                categoria: 'latex', 
                stock: 0,
                imagenes: ['https://i.ibb.co/N21tYTNb/tineta-1.png'],
                descripcion: 'Látex de máxima calidad para paredes interiores con alto poder cubriente. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Rodillo, brocha, pistola',
                        'Rendimiento': '70 m² (2 manos)',
                        'Recomendaciones': 'Paredes interiores'
                    },
                    tecnicas: {
                        'Secado al tacto': '1 hora',
                        'Secado total': '24 horas',
                        'Entre capas': '2-3 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Lavable': 'Sí (hasta 5.000 ciclos)',
                        'Resistencia UV': 'Buena',
                        'Repelencia al agua': 'Sí',
                        'Resistencia al moho': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // LÁTEX 4L
            { 
                id: 4, 
                nombre: 'Látex Extracubriente Galón 4L', 
                precio: 14000,
                categoria: 'latex', 
                subcategoria: '4-litros',
                stock: 0, 
                imagenes: ['https://i.ibb.co/h11HfKgc/galon-2.png'],
                descripcion: 'Látex de 4 litros para paredes interiores con acabado profesional mate. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Rodillo, brocha',
                        'Rendimiento': '17 m² (2 manos)',
                        'Recomendaciones': 'Paredes interiores'
                    },
                    tecnicas: {
                        'Secado al tacto': '1 hora',
                        'Secado total': '24 horas',
                        'Entre capas': '2-3 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Lavable': 'Sí',
                        'Resistencia UV': 'Buena',
                        'Repelencia al agua': 'Sí',
                        'Resistencia al moho': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // SIDING 20L
            { 
                id: 5, 
                nombre: 'Pintura Siding Tineta 20L', 
                precios: {
                    blanco: { satinado: 100000 },
                    color: { satinado: 100000 },
                    especial: { satinado: 143000 }
                },
                categoria: 'siding', 
                stock: 35, 
                imagenes: ['https://i.ibb.co/N21tYTNb/tineta-1.png'],
                descripcion: 'Pintura de alta resistencia para exteriores con protección UV y repelencia al agua. Solo terminación satinada disponible. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Rodillo, brocha, pistola',
                        'Rendimiento': '65 m² (2 manos)',
                        'Recomendaciones': 'Exteriores, fachadas'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '6-8 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Resistencia UV': 'Excelente',
                        'Repelencia al agua': 'Sí',
                        'Resistencia intemperie': 'Extrema',
                        'Resistencia al moho': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // SIDING 4L
            { 
                id: 11, 
                nombre: 'Pintura Siding Galón 4L', 
                precios: {
                    blanco: { satinado: 30000 },
                    color: { satinado: 30000 },
                    especial: { satinado: 38000 }
                },
                categoria: 'siding', 
                subcategoria: '4-litros',
                stock: 28, 
                imagenes: ['https://i.ibb.co/h11HfKgc/galon-2.png'],
                descripcion: 'Pintura de alta resistencia para exteriores con protección UV y repelencia al agua. Solo terminación satinada disponible. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Rodillo, brocha',
                        'Rendimiento': '16 m² (2 manos)',
                        'Recomendaciones': 'Exteriores, fachadas'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '6-8 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Resistencia UV': 'Excelente',
                        'Repelencia al agua': 'Sí',
                        'Resistencia intemperie': 'Extrema',
                        'Resistencia al moho': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // ACRIZINC 20L
            { 
                id: 6, 
                nombre: 'AcriZinc Tineta 20L',
                precios: {
                    blanco: { semibrillo: 118000 },
                    color: { semibrillo: 118000 },
                    especial: { semibrillo: 154000 }
                },
                categoria: 'acrizinc', 
                stock: 40, 
                imagenes: ['https://i.ibb.co/N21tYTNb/tineta-1.png'],
                descripcion: 'Pintura anticorrosiva para metales con protección contra óxido y corrosión. Solo terminación semibrillo disponible. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo, pistola',
                        'Rendimiento': '60 m² (2 manos)',
                        'Recomendaciones': 'Metales, zinc, acero'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '6-8 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Anticorrosiva': 'Sí',
                        'Resistencia UV': 'Excelente',
                        'Resistencia química': 'Alta',
                        'Resistencia intemperie': 'Extrema'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // ACRIZINC 4L
            { 
                id: 7, 
                nombre: 'AcriZinc Galón 4L',
                precios: {
                    blanco: { semibrillo: 36000 },
                    color: { semibrillo: 36000 },
                    especial: { semibrillo: 40000 }
                },
                categoria: 'acrizinc', 
                subcategoria: '4-litros',
                stock: 28, 
                imagenes: ['https://i.ibb.co/h11HfKgc/galon-2.png'],
                descripcion: 'Pintura 4L para protección de metales contra óxido y corrosión. Solo terminación semibrillo disponible. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo',
                        'Rendimiento': '15 m² (2 manos)',
                        'Recomendaciones': 'Metales, zinc, acero'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '6-8 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Anticorrosiva': 'Sí',
                        'Resistencia UV': 'Excelente',
                        'Resistencia química': 'Alta',
                        'Resistencia intemperie': 'Extrema'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // PROTECTOR DE MADERA 20L
            { 
                id: 8, 
                nombre: 'Protector de Madera Premium Tineta 20L', 
                precio: 88000,
                categoria: 'protectores-madera', 
                stock: 22, 
                imagenes: ['https://i.ibb.co/N21tYTNb/tineta-1.png'],
                descripcion: 'Protector de madera premium para exteriores con protección UV y repelencia total. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo, pistola',
                        'Rendimiento': '50 m² (2 manos)',
                        'Recomendaciones': 'Madera interior y exterior'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '4-6 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Protección UV': 'Alta',
                        'Repelencia al agua': '100%',
                        'Resistencia hongos': 'Sí',
                        'Resistencia insectos': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // PROTECTOR DE MADERA 4L
            { 
                id: 9, 
                nombre: 'Protector de Madera Galón 4L', 
                precio: 26000,
                categoria: 'protectores-madera', 
                subcategoria: '4-litros',
                stock: 18, 
                imagenes: ['https://i.ibb.co/h11HfKgc/galon-2.png'],
                descripcion: 'Protector de madera 4L para muebles y estructuras de exterior. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Agua',
                        'Aplicación': 'Brocha, rodillo',
                        'Rendimiento': '12 m² (2 manos)',
                        'Recomendaciones': 'Madera, muebles exteriores'
                    },
                    tecnicas: {
                        'Secado al tacto': '2 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '4-6 horas',
                        'Limpieza': 'Agua y jabón'
                    },
                    resistencia: {
                        'Protección UV': 'Alta',
                        'Repelencia al agua': '100%',
                        'Resistencia hongos': 'Sí',
                        'Resistencia insectos': 'Sí'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            },
            
            // PINTURA PISCINA 16L
            { 
                id: 10, 
                nombre: 'Pintura Piscina Tineta 16L', 
                precio: 130000,
                categoria: 'piscina', 
                stock: 0, 
                imagenes: ['https://i.ibb.co/8ggDJSr5/tineta-piscina-Photoroom.png'],                           
                descripcion: 'Pintura extra caucho especial para piscinas con resistencia al cloro y agua. Precio incluye IVA.',
                especificaciones: {
                    generales: {
                        'Base': 'Extra Caucho',
                        'Aplicación': 'Rodillo de Poliéster',
                        'Rendimiento': '50 m² (2 manos)',
                        'Recomendaciones': 'Piscinas concreto y fibra'
                    },
                    tecnicas: {
                        'Secado al tacto': '4 horas',
                        'Secado total': '24 horas',
                        'Entre capas': '24 horas',
                        'Llenado de agua': '7 días después'
                    },
                    resistencia: {
                        'Resistencia cloro': 'Alta (nano-cobre)',
                        'Impermeabilidad': '100%',
                        'Resistencia química': 'Alta',
                        'Resistencia UV': 'Excelente'
                    },
                    garantias: {
                        'Garantía': '1 año',
                        'Almacenamiento': '12 meses en lugar fresco',
                        'Disponibilidad de colores': 'Pantone, consultar colores por WhatsApp'
                    }
                }
            }
        ];
        
        // CATÁLOGO PANTONE
        this.pantoneCatalogos = {
            esmaltes: [
                { nombre: 'Blanco Puro', color: '#FFFFFF', codigo: 'PM-E-001', categoria: 'Esmaltes' },
                { nombre: 'Gris Blanco', color: '#F5F5F5', codigo: 'PM-E-002', categoria: 'Esmaltes' },
                { nombre: 'Gris Claro', color: '#D3D3D3', codigo: 'PM-E-003', categoria: 'Esmaltes' },
                { nombre: 'Gris Plata', color: '#C0C0C0', codigo: 'PM-E-004', categoria: 'Esmaltes' },
                { nombre: 'Gris Medio', color: '#808080', codigo: 'PM-E-005', categoria: 'Esmaltes' },
                { nombre: 'Gris Grafito', color: '#464646', codigo: 'PM-E-006', categoria: 'Esmaltes' },
                { nombre: 'Negro', color: '#000000', codigo: 'PM-E-007', categoria: 'Esmaltes' },
                { nombre: 'Beige Claro', color: '#F5F5DC', codigo: 'PM-E-008', categoria: 'Esmaltes' },
                { nombre: 'Beige Arena', color: '#F5DEB3', codigo: 'PM-E-009', categoria: 'Esmaltes' },
                { nombre: 'Beige Oscuro', color: '#D2B48C', codigo: 'PM-E-010', categoria: 'Esmaltes' },
                { nombre: 'Rojo Colonial', color: '#8B0000', codigo: 'PM-E-011', categoria: 'Esmaltes' },
                { nombre: 'Ocre', color: '#CC7722', codigo: 'PM-E-012', categoria: 'Esmaltes' },
                { nombre: 'Azul Celeste', color: '#87CEEB', codigo: 'PM-E-013', categoria: 'Esmaltes' },
                { nombre: 'Verde Manzana', color: '#8DB600', codigo: 'PM-E-014', categoria: 'Esmaltes' }
            ],
            
            protectores: [
                { nombre: 'Negro', color: '#000000', codigo: 'PM-P-001', categoria: 'Protectores Madera' },
                { nombre: 'Roble Claro', color: '#D4A574', codigo: 'PM-P-002', categoria: 'Protectores Madera' },
                { nombre: 'Roble Oscuro', color: '#8B4513', codigo: 'PM-P-003', categoria: 'Protectores Madera' },
                { nombre: 'Roble Natural', color: '#D2B48C', codigo: 'PM-P-004', categoria: 'Protectores Madera' },
                { nombre: 'Caoba', color: '#C04000', codigo: 'PM-P-005', categoria: 'Protectores Madera' },
                { nombre: 'Nogal', color: '#773600', codigo: 'PM-P-006', categoria: 'Protectores Madera' },
                { nombre: 'Transparente Brillo', color: '#FFF8DC', codigo: 'PM-P-008', categoria: 'Protectores Madera' }
            ],
            
            acrizinc: [
                { nombre: 'Blanco', color: '#FFFFFF', codigo: 'PM-AZ-001', categoria: 'AcriZinc' },
                { nombre: 'Gris Claro', color: '#D3D3D3', codigo: 'PM-AZ-002', categoria: 'AcriZinc' },
                { nombre: 'Gris Plata', color: '#C0C0C0', codigo: 'PM-AZ-003', categoria: 'AcriZinc' },
                { nombre: 'Gris Medio', color: '#808080', codigo: 'PM-AZ-004', categoria: 'AcriZinc' },
                { nombre: 'Gris Grafito', color: '#464646', codigo: 'PM-AZ-005', categoria: 'AcriZinc' },
                { nombre: 'Negro', color: '#000000', codigo: 'PM-AZ-006', categoria: 'AcriZinc' },
                { nombre: 'Beige Arena', color: '#F5DEB3', codigo: 'PM-AZ-007', categoria: 'AcriZinc' },
                { nombre: 'Ocre', color: '#CC7722', codigo: 'PM-AZ-008', categoria: 'AcriZinc' },
                { nombre: 'Rojo Colonial', color: '#8B0000', codigo: 'PM-AZ-009', categoria: 'AcriZinc' }
            ],
            
            siding: [
                { nombre: 'Blanco', color: '#FFFFFF', codigo: 'PM-S-001', categoria: 'Siding' },
                { nombre: 'Gris Claro', color: '#D3D3D3', codigo: 'PM-S-002', categoria: 'Siding' },
                { nombre: 'Gris Plata', color: '#C0C0C0', codigo: 'PM-S-003', categoria: 'Siding' },
                { nombre: 'Gris Medio', color: '#808080', codigo: 'PM-S-004', categoria: 'Siding' },
                { nombre: 'Gris Grafito', color: '#464646', codigo: 'PM-S-005', categoria: 'Siding' },
                { nombre: 'Negro', color: '#000000', codigo: 'PM-S-006', categoria: 'Siding' },
                { nombre: 'Beige Arena', color: '#F5DEB3', codigo: 'PM-S-007', categoria: 'Siding' },
                { nombre: 'Ocre', color: '#CC7722', codigo: 'PM-S-008', categoria: 'Siding' },
                { nombre: 'Rojo Colonial', color: '#8B0000', codigo: 'PM-S-009', categoria: 'Siding' }
            ],
            
            latex: [
                { nombre: 'Blanco Puro', color: '#FFFFFF', codigo: 'PM-L-001', categoria: 'Látex' }
            ],
            
            piscina: [
                { nombre: 'Gris Arena', color: '#C2B280', codigo: 'PM-PI-001', categoria: 'Piscina' },
                { nombre: 'Azul Tahiti', color: '#008080', codigo: 'PM-PI-002', categoria: 'Piscina' },
                { nombre: 'Azul Turquesa', color: '#40E0D0', codigo: 'PM-PI-003', categoria: 'Piscina' },
                { nombre: 'Azul Cielo', color: '#87CEEB', codigo: 'PM-PI-004', categoria: 'Piscina' },
                { nombre: 'Verde Esmeralda', color: '#50C878', codigo: 'PM-PI-005', categoria: 'Piscina' },
                { nombre: 'Verde Agua', color: '#7FFFD4', codigo: 'PM-PI-006', categoria: 'Piscina' },
                { nombre: 'Gris Oscuro', color: '#36454F', codigo: 'PM-PI-007', categoria: 'Piscina' },
                { nombre: 'Blanco Azulado', color: '#E6F3FF', codigo: 'PM-PI-008', categoria: 'Piscina' }
            ]
        };
        
        // IMÁGENES DE TRABAJOS
        this.workImages = [
            {
                url: 'https://i.ibb.co/1G5TP9gQ/Whats-App-Image-2026-01-29-at-23-47-47.jpg',
                title: 'Esmaltes al agua',
                description: 'Acabado profesional terminación satinado - semibrillo - Repelente al agua'
            },
            {
                url: 'https://i.ibb.co/vvD7dyhn/Whats-App-Image-2026-01-30-at-00-40-35.jpg',
                title: 'Pinturas Para Siding',
                description: 'Colores personalizados para exteriores'
            },
            {
                url: 'https://i.ibb.co/hFBH0tDT/Whats-App-Image-2026-01-30-at-00-46-25.jpg',
                title: 'Pinturas Para Zinc',
                description: 'Colores personalizados para techos y metales'
            },
            {
                url: 'https://i.ibb.co/JRr8Q3Jz/Whats-App-Image-2026-01-30-at-00-22-54.jpg',
                title: 'Protector de Madera',
                description: 'Colores personalizados 100% repelente al agua'
            }
        ];
        
        // INICIALIZAR ESTADOS
        this.carrito = JSON.parse(localStorage.getItem('pinturasCarrito')) || [];
        this.currentFilter = 'all';
        this.currentPantoneCategoria = 'esmaltes';
        this.currentProduct = null;
        
        // SISTEMA DE SELECCIÓN
        this.selectionState = {
            currentStep: 0,
            selectedColor: 'blanco',
            selectedTerminacion: 'satinado',
            isComplete: true,
            steps: ['color', 'terminacion']
        };
        
        this.selectedQuantity = 1;
        this.searchTimeout = null;
        this.searchResults = [];
        this.currentImageViewerIndex = 0;
        this.imageRotation = 0;
        this.imageZoom = 1;
        
        // COOKIES
        this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
        
        // INICIALIZAR
        this.init();
    }
    
    // ==============================================
    // MÉTODOS DE INICIALIZACIÓN
    // ==============================================
    
    init() {
        this.renderProducts();
        this.updateCartCount();
        this.loadPantoneColors();
        this.bindEvents();
        this.initLazyLoad();
        
        // Mostrar cookies si no aceptadas
        if (!this.cookiesAccepted) {
            setTimeout(() => {
                document.getElementById('cookies-banner').style.display = 'block';
            }, 2000);
        }
        
        // Inicializar gestos táctiles
        this.initTouchGestures();
        document.body.classList.add('page-loaded');
    }
    
    initTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
        
        // Mejorar feedback táctil
        const touchElements = document.querySelectorAll('button, a, .clickable, .product-card, .work-sample');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.style.transition = 'transform 0.1s';
                element.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            element.addEventListener('touchend', () => {
                element.style.transform = 'scale(1)';
                setTimeout(() => {
                    element.style.transition = '';
                }, 100);
            }, { passive: true });
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe izquierda
                if (document.getElementById('image-viewer').style.display === 'block') {
                    this.nextImage();
                }
            } else {
                // Swipe derecha
                if (document.getElementById('image-viewer').style.display === 'block') {
                    this.prevImage();
                }
            }
        }
    }
    
    // ==============================================
    // MÉTODOS DE NAVEGACIÓN
    // ==============================================
    
    showSection(sectionId) {
        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar sección objetivo
        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Actualizar navegación activa
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`.nav-links a[onclick*="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Cerrar menú en móviles
        if (window.innerWidth < 768) {
            this.toggleMenu();
            document.getElementById('search-container').classList.remove('active');
        }
        
        window.scrollTo({ top: 60, behavior: 'smooth' });
    }
    
    toggleMenu() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
    
    toggleSearch() {
        const searchContainer = document.getElementById('search-container');
        searchContainer.classList.toggle('active');
        
        if (searchContainer.classList.contains('active')) {
            setTimeout(() => {
                document.getElementById('search-input').focus();
            }, 100);
        }
    }
    
    // ==============================================
    // MÉTODOS DE PRODUCTOS
    // ==============================================
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        const filtered = this.getFilteredProducts();
        container.innerHTML = filtered.map(producto => {
            const precioMinimo = this.getPrecioMinimo(producto);
            return this.createProductCardHTML(producto, precioMinimo);
        }).join('');
        
        this.initLazyLoad();
    }
    
    createProductCardHTML(producto, precioMinimo) {
        return `
            <div class="product-card">
                <div class="product-image-container" onclick="store.quickViewProduct(${producto.id})">
                    <img src="${producto.imagenes[0]}" 
                         alt="${producto.nombre}" 
                         class="product-image protected-image lazyload"
                         data-src="${producto.imagenes[0]}">
                    <div class="watermark-overlay"></div>
                    <div class="product-badge ${producto.stock > 0 ? 'badge-stock' : 'badge-out'}">
                        ${producto.stock > 0 ? 'Disponible' : 'Agotado'}
                    </div>
                    ${producto.subcategoria === '4-litros' ? 
                        '<div class="product-badge badge-sale" style="top: 40px; background: #3498db;">GALÓN 4L</div>' : ''}
                    <button class="quick-view-btn">
                        <i class="fas fa-search-plus"></i> Vista Rápida
                    </button>
                </div>
                
                <div class="product-info">
                    <h3 class="product-title" onclick="store.showProductDetail(${producto.id})">
                        ${producto.nombre}
                    </h3>
                    
                    <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 15px; flex: 1;">
                        ${producto.descripcion.substring(0, 80)}...
                    </p>
                    
                    <div class="product-price">
                        ${producto.precios ? `Desde $${precioMinimo.toLocaleString('es-CL')}` : `$${producto.precio.toLocaleString('es-CL')}`}
                    </div>
                    
                    <div class="product-price-small">
                        <i class="fas fa-check-circle" style="color: var(--secondary-color);"></i> Precio incluye IVA
                    </div>
                    
                    ${producto.precios ? 
                        `<p class="product-price-small">
                            <i class="fas fa-palette"></i> Variedad de colores y terminaciones
                        </p>` : ''}
                    
                    <div class="product-actions">
                        <button class="btn-detail" onclick="store.showProductDetail(${producto.id})">
                            <i class="fas fa-info-circle"></i> Especificaciones
                        </button>
                        <button class="btn-cart" onclick="store.addToCart(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getFilteredProducts() {
        if (this.currentFilter === 'all') return this.productos;
        if (this.currentFilter === '4-litros') {
            return this.productos.filter(p => p.subcategoria === '4-litros');
        }
        return this.productos.filter(p => p.categoria === this.currentFilter);
    }
    
    filterProducts(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        this.renderProducts();
    }
    
    getPrecioMinimo(producto) {
        if (!producto.precios) return producto.precio || 0;
        
        if (producto.categoria === 'siding' || producto.categoria === 'acrizinc') {
            const precios = [
                ...Object.values(producto.precios.blanco || {}),
                ...Object.values(producto.precios.color || {}),
                ...Object.values(producto.precios.especial || {})
            ];
            return Math.min(...precios.filter(p => p));
        }
        
        const precios = [
            ...Object.values(producto.precios.blanco || {}),
            ...Object.values(producto.precios.color || {}),
            ...Object.values(producto.precios.especial || {})
        ];
        return Math.min(...precios.filter(p => p));
    }
    
    // ==============================================
    // VISTA DETALLADA DE PRODUCTO
    // ==============================================
    
    showProductDetail(id) {
        this.currentProduct = this.productos.find(p => p.id === id);
        if (!this.currentProduct) return;
        
        this.resetSelectionState();
        this.selectedQuantity = 1;
        
        const modalBody = document.getElementById('product-modal-body');
        const tienePreciosMultiples = this.currentProduct.precios !== undefined;
        const especificacionesHTML = this.generateSpecificationsHTML(this.currentProduct.especificaciones);
        
        modalBody.innerHTML = `
            <div style="display: grid; gap: 20px;">
                <!-- Imágenes -->
                <div class="product-images">
                    <div class="main-image" onclick="store.openProductImageViewer(0)">
                        <img src="${this.currentProduct.imagenes[0]}" 
                             alt="${this.currentProduct.nombre}" 
                             class="protected-image lazyload"
                             data-src="${this.currentProduct.imagenes[0]}"
                             id="main-product-image">
                        <div class="zoom-indicator">
                            <i class="fas fa-search-plus"></i> Haz clic para ampliar
                        </div>
                    </div>
                    <div class="thumbnails">
                        ${this.currentProduct.imagenes.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                                 onclick="store.changeProductImage('${img}', ${index})">
                                <img src="${img}" alt="Vista ${index + 1}" class="protected-image lazyload" data-src="${img}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Información -->
                <div>
                    <h2 style="color: var(--text-color); margin-bottom: 15px; font-size: 1.3rem;">${this.currentProduct.nombre}</h2>
                    
                    <p style="color: var(--text-light); margin-bottom: 15px; line-height: 1.6; font-size: 1rem;">
                        ${this.currentProduct.descripcion}
                    </p>
                    
                    <!-- ESPECIFICACIONES -->
                    <div class="specifications-container">
                        <div class="specifications-header">
                            <i class="fas fa-clipboard-list"></i>
                            <h3>Especificaciones Técnicas</h3>
                        </div>
                        
                        <div class="spec-tabs">
                            <button class="spec-tab active" onclick="store.changeSpecTab('generales', this)">Características</button>
                            <button class="spec-tab" onclick="store.changeSpecTab('tecnicas', this)">Técnicas</button>
                            <button class="spec-tab" onclick="store.changeSpecTab('resistencia', this)">Resistencia</button>
                            <button class="spec-tab" onclick="store.changeSpecTab('garantias', this)">Garantías</button>
                        </div>
                        
                        ${especificacionesHTML}
                    </div>
                    
                    ${tienePreciosMultiples ? this.getPersonalizationHTML() : ''}
                    
                    <!-- Precio Final -->
                    <div class="final-price-box-compact">
                        <div class="final-price-label-compact">Precio por unidad</div>
                        <div class="final-price-compact" id="final-price-compact">
                            ${this.getCurrentPriceDisplay()}
                        </div>
                        <p style="color: var(--secondary-color); margin-top: 8px; font-weight: 600; font-size: 0.9rem;">
                            <i class="fas fa-check-circle"></i> Precio incluye el 19% de IVA
                        </p>
                    </div>
                    
                    <!-- Cantidad y Acciones -->
                    <div style="background: var(--surface-color); padding: 15px; border-radius: 10px; border: 1px solid var(--border-color);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; flex-wrap: wrap;">
                            <div>
                                <label style="display: block; margin-bottom: 6px; color: var(--text-color); font-weight: 500; font-size: 0.95rem;">
                                    <i class="fas fa-box"></i> Cantidad
                                </label>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <button onclick="store.changeQuantity(-1)" 
                                            style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--border-color); background: var(--surface-color); color: var(--text-color); cursor: pointer; font-size: 1rem;">
                                        -
                                    </button>
                                    <input type="number" id="product-quantity" value="${this.selectedQuantity}" min="1" 
                                           max="${this.currentProduct.stock}"
                                           style="width: 50px; text-align: center; padding: 6px; border: 2px solid var(--border-color); border-radius: 6px; font-weight: 600; background: var(--input-bg); color: var(--text-color); font-size: 0.9rem;">
                                    <button onclick="store.changeQuantity(1)" 
                                            style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--border-color); background: var(--surface-color); color: var(--text-color); cursor: pointer; font-size: 1rem;">
                                        +
                                    </button>
                                </div>
                            </div>
                            
                            <div style="color: ${this.currentProduct.stock > 0 ? 'var(--secondary-color)' : '#e74c3c'}; font-weight: 600; font-size: 0.85rem;">
                                <i class="fas fa-warehouse"></i> Stock: ${this.currentProduct.stock > 0 ? this.currentProduct.stock + ' unidades' : 'AGOTADO'}
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <button onclick="store.addToCartFromModal()" 
                                    ${this.currentProduct.stock === 0 ? 'disabled' : ''}
                                    style="background: ${this.currentProduct.stock === 0 ? 'var(--border-color)' : 'var(--secondary-color)'}; 
                                           color: white; border: none; padding: 10px; border-radius: 8px; 
                                           cursor: ${this.currentProduct.stock === 0 ? 'not-allowed' : 'pointer'}; 
                                           font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                <i class="fas fa-cart-plus"></i> Agregar
                            </button>
                            
                            <button onclick="store.buyNow()" 
                                    ${this.currentProduct.stock === 0 ? 'disabled' : ''}
                                    style="background: ${this.currentProduct.stock === 0 ? 'var(--border-color)' : '#3498db'}; 
                                           color: white; border: none; padding: 10px; border-radius: 8px; 
                                           cursor: ${this.currentProduct.stock === 0 ? 'not-allowed' : 'pointer'}; 
                                           font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                <i class="fas fa-bolt"></i> Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.openModal('product-modal');
        this.initLazyLoad();
        
        if (tienePreciosMultiples) {
            this.loadTerminationOptionsCompact();
        }
    }
    
    getPersonalizationHTML() {
        return `
            <!-- SISTEMA DE PERSONALIZACIÓN -->
            <div class="selection-container">
                <h3 class="selector-title">
                    <i class="fas fa-cogs"></i> Personaliza tu Producto
                </h3>
                <div class="customization-flow" id="customization-flow">
                    <!-- Paso 1: Selección de Color -->
                    <div class="customization-step active" id="step-color-compact">
                        <div class="step-header-compact">
                            <div class="step-number-compact">1</div>
                            <div class="step-info-compact">
                                <div class="step-title-compact">Selecciona Tipo de Color</div>
                                <div class="step-description-compact">Elige el tipo de color que necesitas para tu proyecto</div>
                            </div>
                        </div>
                        <div class="color-options-compact">
                            <div class="color-option-compact selected" onclick="store.selectColorCompact('blanco', this)">
                                <div class="color-preview-compact" style="background: linear-gradient(135deg, #FFFFFF 50%, #F5F5F5 50%);"></div>
                                <div class="color-name-compact">Color Blanco</div>
                                <div class="color-price-compact">${this.getCurrentPriceDisplay('blanco', this.selectionState.selectedTerminacion)}</div>
                                <div class="color-badge-compact">Seleccionado</div>
                            </div>
                            
                            <div class="color-option-compact" onclick="store.selectColorCompact('color', this)">
                                <div class="color-preview-compact" style="background: linear-gradient(135deg, #4A90E2 50%, #7B68EE 50%);"></div>
                                <div class="color-name-compact">Color Estándar</div>
                                <div class="color-price-compact">${this.getCurrentPriceDisplay('color', this.selectionState.selectedTerminacion)}</div>
                            </div>
                            
                            <div class="color-option-compact" onclick="store.selectColorCompact('especial', this)">
                                <div class="color-preview-compact" style="background: linear-gradient(135deg, #FF6B6B 50%, #4ECDC4 50%);"></div>
                                <div class="color-name-compact">Color Personalizado</div>
                                <div class="color-price-compact">${this.getCurrentPriceDisplay('especial', this.selectionState.selectedTerminacion)}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Paso 2: Selección de Terminación -->
                    <div class="customization-step" id="step-terminacion-compact">
                        <div class="step-header-compact">
                            <div class="step-number-compact">2</div>
                            <div class="step-info-compact">
                                <div class="step-title-compact">Selecciona Acabado</div>
                                <div class="step-description-compact">Elige la terminación que mejor se adapte a tus necesidades</div>
                            </div>
                        </div>
                        <div class="termination-options-compact" id="termination-options-compact">
                            <!-- Opciones cargadas dinámicamente -->
                        </div>
                    </div>
                </div>
                
                <!-- Resumen de Selección -->
                <div class="selection-summary-compact" id="selection-summary-compact">
                    <div class="summary-title-compact">
                        <i class="fas fa-check-circle"></i> Resumen de tu Selección
                    </div>
                    <div class="summary-details-compact">
                        <div class="summary-item-compact">
                            <div class="summary-label-compact">Color</div>
                            <div class="summary-value-compact" id="summary-color">Blanco</div>
                        </div>
                        <div class="summary-item-compact">
                            <div class="summary-label-compact">Terminación</div>
                            <div class="summary-value-compact" id="summary-terminacion">Satinado</div>
                        </div>
                        <div class="summary-item-compact">
                            <div class="summary-label-compact">Precio Unidad</div>
                            <div class="summary-value-compact" id="summary-price-unit">${this.getCurrentPriceDisplay()}</div>
                        </div>
                    </div>
                    <div class="summary-price-compact" id="summary-price-total">
                        ${this.getCurrentPriceDisplay()}
                    </div>
                </div>
            </div>
        `;
    }
    
    generateSpecificationsHTML(especificaciones) {
        if (!especificaciones) return '';
        
        const categorias = [
            { id: 'generales', nombre: 'Características Generales', icon: 'fas fa-info-circle' },
            { id: 'tecnicas', nombre: 'Propiedades Técnicas', icon: 'fas fa-tools' },
            { id: 'resistencia', nombre: 'Resistencia y Durabilidad', icon: 'fas fa-shield-alt' },
            { id: 'garantias', nombre: 'Garantías y Certificaciones', icon: 'fas fa-certificate' }
        ];
        
        let html = '';
        categorias.forEach((categoria, index) => {
            const especs = especificaciones[categoria.id];
            if (!especs) return;
            
            const isActive = index === 0 ? 'active' : '';
            
            html += `
                <div class="spec-tab-content ${isActive}" id="spec-tab-${categoria.id}">
                    <div class="specifications-grid">
                        ${Object.entries(especs).map(([clave, valor]) => `
                            <div class="specification-card">
                                <div class="spec-card-header">
                                    <div class="spec-icon">
                                        <i class="${categoria.icon}"></i>
                                    </div>
                                    <div class="spec-title">${clave}</div>
                                </div>
                                <div class="spec-content">
                                    <div class="spec-highlight">
                                        ${valor}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        return html;
    }
    
    changeSpecTab(tabId, element) {
        document.querySelectorAll('.spec-tab').forEach(tab => tab.classList.remove('active'));
        element.classList.add('active');
        
        document.querySelectorAll('.spec-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const tabContent = document.getElementById(`spec-tab-${tabId}`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    }
    
    // ==============================================
    // SISTEMA DE PERSONALIZACIÓN
    // ==============================================
    
    resetSelectionState() {
        this.selectionState = {
            currentStep: 0,
            selectedColor: 'blanco',
            selectedTerminacion: 'satinado',
            isComplete: true,
            steps: ['color', 'terminacion']
        };
        
        if (this.currentProduct) {
            if (this.currentProduct.categoria === 'siding') {
                this.selectionState.selectedTerminacion = 'satinado';
            } else if (this.currentProduct.categoria === 'acrizinc') {
                this.selectionState.selectedTerminacion = 'semibrillo';
            }
        }
    }
    
    getCurrentPriceDisplay(color = null, terminacion = null) {
        if (!this.currentProduct) return '$0';
        
        if (!this.currentProduct.precios) {
            return `$${this.currentProduct.precio.toLocaleString('es-CL')}`;
        }
        
        const colorToUse = color || this.selectionState.selectedColor;
        const terminacionToUse = terminacion || this.selectionState.selectedTerminacion;
        
        if (!this.currentProduct.precios[colorToUse] || !this.currentProduct.precios[colorToUse][terminacionToUse]) {
            const availableTerminaciones = Object.keys(this.currentProduct.precios[colorToUse] || {});
            if (availableTerminaciones.length > 0) {
                this.selectionState.selectedTerminacion = availableTerminaciones[0];
                return `$${this.currentProduct.precios[colorToUse][availableTerminaciones[0]].toLocaleString('es-CL')}`;
            }
            return '$0';
        }
        
        return `$${this.currentProduct.precios[colorToUse][terminacionToUse].toLocaleString('es-CL')}`;
    }
    
    selectColorCompact(color, element) {
        if (!this.currentProduct || !this.currentProduct.precios) return;
        
        this.selectionState.selectedColor = color;
        this.selectionState.isComplete = true;
        
        // Actualizar visualización
        document.querySelectorAll('.color-option-compact').forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('.color-badge-compact')?.remove();
        });
        element.classList.add('selected');
        element.insertAdjacentHTML('beforeend', '<div class="color-badge-compact">✓</div>');
        
        this.updateSelectionSummary();
        this.updateProductPrice();
        this.loadTerminationOptionsCompact();
        
        this.showToast(`Color seleccionado: ${this.getColorName(color)}`);
    }
    
    loadTerminationOptionsCompact() {
        if (!this.currentProduct || !this.currentProduct.precios) return;
        
        const container = document.getElementById('termination-options-compact');
        if (!container) return;
        
        const color = this.selectionState.selectedColor;
        const terminacionesDisponibles = this.currentProduct.precios[color] || {};
        
        let terminacionesHTML = '';
        
        if (this.currentProduct.categoria === 'esmaltes') {
            const terminaciones = {
                satinado: { nombre: 'Satinado', desc: 'Suave con ligero brillo', icon: 'fas fa-sun' },
                semibrillo: { nombre: 'Semi Brillo', desc: 'Brillo moderado', icon: 'fas fa-sun' },
                repelente: { nombre: 'Repelente', desc: 'Resistencia superior', icon: 'fas fa-tint-slash' }
            };
            
            const terminacionesFiltradas = Object.keys(terminaciones).filter(terminacion => 
                terminacionesDisponibles[terminacion] !== undefined
            );
            
            terminacionesHTML = terminacionesFiltradas.map(terminacion => {
                const terminacionData = terminaciones[terminacion];
                const precio = terminacionesDisponibles[terminacion];
                const isSelected = this.selectionState.selectedTerminacion === terminacion;
                
                return `
                    <div class="termination-option-compact ${isSelected ? 'selected' : ''}" 
                         onclick="store.selectTerminationCompact('${terminacion}', this)">
                        <div class="termination-icon-compact">
                            <i class="${terminacionData.icon}"></i>
                        </div>
                        <div class="termination-name-compact">${terminacionData.nombre}</div>
                        <div class="termination-price-compact">$${precio.toLocaleString('es-CL')}</div>
                    </div>
                `;
            }).join('');
        }
        else if (this.currentProduct.categoria === 'siding') {
            const precio = terminacionesDisponibles.satinado;
            const isSelected = this.selectionState.selectedTerminacion === 'satinado';
            
            terminacionesHTML = `
                <div class="termination-option-compact ${isSelected ? 'selected' : ''}" onclick="store.selectTerminationCompact('satinado', this)">
                    <div class="termination-icon-compact">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div class="termination-name-compact">Satinado</div>
                    <div class="termination-price-compact">$${precio.toLocaleString('es-CL')}</div>
                </div>
            `;
        }
        else if (this.currentProduct.categoria === 'acrizinc') {
            const precio = terminacionesDisponibles.semibrillo;
            const isSelected = this.selectionState.selectedTerminacion === 'semibrillo';
            
            terminacionesHTML = `
                <div class="termination-option-compact ${isSelected ? 'selected' : ''}" onclick="store.selectTerminationCompact('semibrillo', this)">
                    <div class="termination-icon-compact">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div class="termination-name-compact">Semibrillo</div>
                    <div class="termination-price-compact">$${precio.toLocaleString('es-CL')}</div>
                </div>
            `;
        }
        
        container.innerHTML = terminacionesHTML;
    }
    
    selectTerminationCompact(terminacion, element) {
        if (!this.currentProduct || !this.currentProduct.precios) return;
        
        this.selectionState.selectedTerminacion = terminacion;
        this.selectionState.isComplete = true;
        
        document.querySelectorAll('.termination-option-compact').forEach(card => {
            card.classList.remove('selected');
        });
        element.classList.add('selected');
        
        this.updateSelectionSummary();
        this.updateProductPrice();
        
        this.showToast(`Terminación seleccionada: ${this.getTerminacionName(terminacion)}`);
    }
    
    updateSelectionSummary() {
        const colorNames = {
            blanco: 'Blanco',
            color: 'Color Estándar',
            especial: 'Color Personalizado'
        };
        
        const terminacionNames = {
            satinado: 'Satinado',
            semibrillo: 'Semi Brillo',
            repelente: 'Repelente'
        };
        
        const summaryColor = document.getElementById('summary-color');
        const summaryTerminacion = document.getElementById('summary-terminacion');
        const summaryPriceUnit = document.getElementById('summary-price-unit');
        const summaryPriceTotal = document.getElementById('summary-price-total');
        
        if (summaryColor) summaryColor.textContent = colorNames[this.selectionState.selectedColor] || this.selectionState.selectedColor;
        if (summaryTerminacion) summaryTerminacion.textContent = terminacionNames[this.selectionState.selectedTerminacion] || this.selectionState.selectedTerminacion;
        
        const precioActual = this.getCurrentPriceDisplay();
        if (summaryPriceUnit) summaryPriceUnit.textContent = precioActual;
        if (summaryPriceTotal) summaryPriceTotal.textContent = precioActual;
    }
    
    // ==============================================
    // CARRITO DE COMPRAS
    // ==============================================
    
    addToCart(id, cantidad = 1) {
        const producto = this.productos.find(p => p.id === id);
        if (!producto || producto.stock === 0) {
            this.showToast('Producto sin stock disponible', 'error');
            return;
        }
        
        let precio;
        let color = 'blanco';
        let terminacion = 'satinado';
        let colorNombre = 'Blanco';
        let terminacionNombre = 'Satinado';
        
        if (producto.precios) {
            if (this.currentProduct && this.currentProduct.id === id) {
                precio = producto.precios[this.selectionState.selectedColor][this.selectionState.selectedTerminacion];
                color = this.selectionState.selectedColor;
                terminacion = this.selectionState.selectedTerminacion;
            } else {
                const defaultColor = 'blanco';
                const defaultTerminacion = 'satinado';
                precio = producto.precios[defaultColor][defaultTerminacion];
                color = defaultColor;
                terminacion = defaultTerminacion;
            }
            
            colorNombre = this.getColorName(color);
            terminacionNombre = this.getTerminacionName(terminacion);
        } else {
            precio = producto.precio;
        }
        
        const itemExistente = this.carrito.find(item => 
            item.id === id && 
            item.color === color && 
            item.terminacion === terminacion
        );
        
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: precio,
                cantidad: cantidad,
                color: color,
                terminacion: terminacion,
                colorNombre: colorNombre,
                terminacionNombre: terminacionNombre,
                imagen: producto.imagenes[0],
                categoria: producto.categoria
            });
        }
        
        localStorage.setItem('pinturasCarrito', JSON.stringify(this.carrito));
        this.updateCartCount();
        this.showToast(`✓ ${producto.nombre} agregado al carrito`);
    }
    
    addToCartFromModal() {
        if (!this.currentProduct) return;
        this.addToCart(this.currentProduct.id, this.selectedQuantity);
        this.closeModal();
    }
    
    buyNow() {
        if (!this.currentProduct) return;
        this.addToCart(this.currentProduct.id, this.selectedQuantity);
        this.closeModal();
        this.toggleCart();
    }
    
    updateCartCount() {
        const count = this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
        const countElement = document.getElementById('cart-count');
        if (countElement) {
            countElement.textContent = count;
        }
    }
    
    toggleCart() {
        const modal = document.getElementById('cart-modal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        this.renderCart();
    }
    
    renderCart() {
        const container = document.getElementById('cart-items');
        const empty = document.getElementById('cart-empty');
        const summary = document.getElementById('cart-summary');
        
        if (this.carrito.length === 0) {
            if (empty) empty.style.display = 'block';
            if (summary) summary.style.display = 'none';
            if (container) container.innerHTML = '';
        } else {
            if (empty) empty.style.display = 'none';
            if (summary) summary.style.display = 'block';
            
            if (container) {
                container.innerHTML = this.carrito.map((item, index) => {
                    const tieneColorTerminacion = item.color && item.terminacion;
                    return `
                        <div class="cart-item">
                            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image protected-image lazyload" data-src="${item.imagen}">
                            
                            <div class="cart-item-info">
                                <h4 style="margin: 0 0 5px 0; color: var(--text-color); font-size: 0.95rem;">${item.nombre}</h4>
                                ${tieneColorTerminacion ? `
                                    <p style="margin: 0 0 5px 0; color: var(--text-light); font-size: 0.85rem;">
                                        <i class="fas fa-palette"></i> ${item.colorNombre} - ${item.terminacionNombre}
                                    </p>
                                ` : ''}
                                <p style="margin: 0; color: var(--primary-color); font-weight: 600; font-size: 0.95rem;">
                                    $${item.precio.toLocaleString('es-CL')} c/u
                                </p>
                                <small style="color: var(--secondary-color); font-weight: 600; font-size: 0.8rem;">
                                    <i class="fas fa-check-circle"></i> IVA incluido
                                </small>
                            </div>
                            
                            <div class="cart-item-controls">
                                <button onclick="store.updateCartItem(${index}, ${item.cantidad - 1})" title="Reducir">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" value="${item.cantidad}" min="1" 
                                       onchange="store.updateCartItem(${index}, this.value)"
                                       style="background: var(--input-bg); color: var(--text-color);">
                                <button onclick="store.updateCartItem(${index}, ${item.cantidad + 1})" title="Aumentar">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            
                            <div style="text-align: right;">
                                <p style="margin: 0 0 8px 0; color: var(--text-color); font-weight: 600; font-size: 0.95rem;">
                                    $${(item.precio * item.cantidad).toLocaleString('es-CL')}
                                </p>
                                <button onclick="store.removeFromCart(${index})" 
                                        style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');
                
                const total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
                const cartTotal = document.getElementById('cart-total');
                if (cartTotal) cartTotal.textContent = `$${total.toLocaleString('es-CL')}`;
            }
        }
    }
    
    updateCartItem(index, cantidad) {
        if (index < 0 || index >= this.carrito.length) return;
        
        const item = this.carrito[index];
        if (!item) return;
        
        if (cantidad < 1) {
            this.removeFromCart(index);
            return;
        }
        
        const producto = this.productos.find(p => p.id === item.id);
        if (producto && cantidad > producto.stock) {
            this.showToast(`Solo hay ${producto.stock} unidades disponibles`, 'error');
            cantidad = producto.stock;
        }
        
        item.cantidad = parseInt(cantidad);
        localStorage.setItem('pinturasCarrito', JSON.stringify(this.carrito));
        this.renderCart();
        this.updateCartCount();
    }
    
    removeFromCart(index) {
        if (index < 0 || index >= this.carrito.length) return;
        
        this.carrito.splice(index, 1);
        localStorage.setItem('pinturasCarrito', JSON.stringify(this.carrito));
        this.renderCart();
        this.updateCartCount();
        this.showToast('Producto eliminado del carrito');
    }
    
    // ==============================================
    // CHECKOUT Y PAGOS
    // ==============================================
    
    checkout(paymentMethod = 'whatsapp') {
        if (this.carrito.length === 0) {
            this.showToast('El carrito está vacío', 'error');
            return;
        }
        
        const items = this.carrito.map(item => {
            let descripcion = `• ${item.nombre}`;
            if (item.color && item.terminacion) {
                descripcion += ` (${item.colorNombre} - ${item.terminacionNombre})`;
            }
            descripcion += ` x${item.cantidad} = $${(item.precio * item.cantidad).toLocaleString('es-CL')}`;
            descripcion += ` (IVA incluido)`;
            return descripcion;
        }).join('%0A');
        
        const total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        
        let mensaje;
        
        switch(paymentMethod) {
            case 'whatsapp':
                mensaje = `¡Hola! Quiero realizar una compra:%0A%0A${items}%0A%0A*Total: $${total.toLocaleString('es-CL')} (IVA incluido)*%0A%0ADatos de envío:%0A- Nombre:%0A- Dirección:%0A- Teléfono:%0A%0A¿Podemos proceder con el pago por WhatsApp?`;
                break;
            
            case 'tienda':
                mensaje = `¡Hola! Quiero retirar en tienda y pagar presencialmente:%0A%0A${items}%0A%0A*Total: $${total.toLocaleString('es-CL')} (IVA incluido)*%0A%0ADatos para retiro:%0A- Nombre:%0A- Teléfono:%0A- Fecha aproximada de retiro:%0A%0A¿Está disponible para retiro inmediato?`;
                break;
            
            case 'consultar':
                mensaje = `¡Hola! Tengo una consulta sobre mi carrito de compras:%0A%0A${items}%0A%0A*Total: $${total.toLocaleString('es-CL')} (IVA incluido)*%0A%0APreguntas:%0A- ¿Tienen stock disponible?%0A- ¿Costos de envío a mi dirección?%0A- ¿Opciones de pago?`;
                break;
            
            default:
                mensaje = `¡Hola! Quiero realizar una compra:%0A%0A${items}%0A%0A*Total: $${total.toLocaleString('es-CL')} (IVA incluido)*%0A%0ADatos de envío:%0A- Nombre:%0A- Dirección:%0A- Teléfono:`;
        }
        
        const whatsappUrl = `https://wa.me/56996481758?text=${mensaje}`;
        window.open(whatsappUrl, '_blank');
        this.toggleCart();
    }
    
    // ==============================================
    // PANTONE Y COLORES
    // ==============================================
    
    loadPantoneColors() {
        const container = document.getElementById('pantone-colors');
        if (!container) return;
        
        const colores = this.pantoneCatalogos[this.currentPantoneCategoria] || [];
        container.innerHTML = colores.map(color => `
            <div class="color-box" style="background-color: ${color.color};" 
                 onclick="store.selectPantoneColor('${color.nombre}', '${color.codigo}', '${this.currentPantoneCategoria}')">
                <div class="color-info-box">
                    <div class="color-code">${color.codigo}</div>
                    <div class="color-name">${color.nombre}</div>
                    <div style="font-size: 0.7rem; opacity: 0.8; margin-top: 5px;">
                        <i class="fas fa-percentage"></i> IVA incluido
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    changePantoneCategory(categoria) {
        this.currentPantoneCategoria = categoria;
        document.querySelectorAll('.pantone-tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');
        this.loadPantoneColors();
    }
    
    selectPantoneColor(nombre, codigo, categoria) {
        this.showToast(`Color ${nombre} (${codigo}) seleccionado`);
        
        setTimeout(() => {
            if (confirm(`¿Quieres consultar sobre el color ${nombre} (${codigo}) para ${categoria} por WhatsApp?`)) {
                const mensaje = `Hola, estoy interesado en el color: ${nombre} (${codigo}) para ${categoria}. ¿Podrían darme más información y precio? (IVA incluido)`;
                window.open(`https://wa.me/56996481758?text=${encodeURIComponent(mensaje)}`, '_blank');
            }
        }, 1000);
    }
    
    consultWhatsAppPantone() {
        const categoriaNombre = {
            'esmaltes': 'Esmaltes',
            'protectores': 'Protectores de Madera',
            'acrizinc': 'AcriZinc',
            'siding': 'Siding',
            'latex': 'Látex',
            'piscina': 'Pintura para Piscina'
        }[this.currentPantoneCategoria] || this.currentPantoneCategoria;
        
        const mensaje = `Hola, quiero consultar sobre colores Pantone para ${categoriaNombre}. ¿Podrían enviarme el catálogo completo y precios? (Todos los precios incluyen IVA)`;
        window.open(`https://wa.me/56996481758?text=${encodeURIComponent(mensaje)}`, '_blank');
    }
    
    // ==============================================
    // BÚSQUEDA
    // ==============================================
    
    handleSearchInput() {
        const searchInput = document.getElementById('search-input');
        const term = searchInput.value.trim();
        const resultsContainer = document.getElementById('search-results');
        
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        
        if (term.length < 2) {
            if (resultsContainer) resultsContainer.classList.remove('active');
            return;
        }
        
        this.searchTimeout = setTimeout(() => {
            this.performSearch(term);
        }, 300);
    }
    
    performSearch(term) {
        const searchTerm = term.toLowerCase();
        this.searchResults = this.productos.filter(producto => {
            return (
                producto.nombre.toLowerCase().includes(searchTerm) ||
                producto.categoria.toLowerCase().includes(searchTerm) ||
                producto.descripcion.toLowerCase().includes(searchTerm) ||
                (producto.subcategoria && producto.subcategoria.toLowerCase().includes(searchTerm))
            );
        });
        
        this.displaySearchResults();
    }
    
    displaySearchResults() {
        const resultsContainer = document.getElementById('search-results');
        const searchInput = document.getElementById('search-input');
        
        if (!resultsContainer || !searchInput) return;
        
        if (this.searchResults.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>
                    <p>No se encontraron productos</p>
                    <p style="font-size: 0.9rem; color: var(--text-lighter);">Intenta con otros términos</p>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = this.searchResults.slice(0, 10).map(producto => {
                const precioMinimo = this.getPrecioMinimo(producto);
                return `
                    <div class="search-result-item" onclick="store.selectSearchResult(${producto.id})">
                        <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="protected-image lazyload" data-src="${producto.imagenes[0]}">
                        <div class="search-result-info">
                            <div class="search-result-name">${producto.nombre}</div>
                            <div class="search-result-price">
                                ${producto.precios ? `Desde $${precioMinimo.toLocaleString('es-CL')}` : `$${producto.precio.toLocaleString('es-CL')}`}
                            </div>
                            <small style="color: var(--secondary-color);">
                                <i class="fas fa-check-circle"></i> IVA incluido
                            </small>
                        </div>
                    </div>
                `;
            }).join('');
            
            if (this.searchResults.length > 10) {
                resultsContainer.innerHTML += `
                    <div class="search-result-item" onclick="store.showAllSearchResults()" style="text-align: center; color: var(--primary-color); font-weight: 600;">
                        <i class="fas fa-plus-circle"></i> Ver ${this.searchResults.length - 10} más resultados
                    </div>
                `;
            }
        }
        
        resultsContainer.classList.add('active');
        
        // Cerrar resultados al hacer clic fuera
        setTimeout(() => {
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                    resultsContainer.classList.remove('active');
                }
            }, { once: true });
        }, 100);
    }
    
    selectSearchResult(productId) {
        const producto = this.productos.find(p => p.id === productId);
        if (producto) {
            this.showProductDetail(productId);
            document.getElementById('search-input').value = '';
            const resultsContainer = document.getElementById('search-results');
            if (resultsContainer) resultsContainer.classList.remove('active');
            
            if (window.innerWidth < 768) {
                document.getElementById('search-container').classList.remove('active');
            }
        }
    }
    
    searchProducts() {
        const searchInput = document.getElementById('search-input');
        const term = searchInput.value.toLowerCase().trim();
        
        if (!term) {
            this.renderProducts();
            return;
        }
        
        this.showSection('products');
        
        setTimeout(() => {
            const filtered = this.productos.filter(producto => 
                producto.nombre.toLowerCase().includes(term) ||
                producto.categoria.toLowerCase().includes(term) ||
                producto.descripcion.toLowerCase().includes(term)
            );
            
            const container = document.getElementById('products-grid');
            if (filtered.length === 0) {
                container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                        <i class="fas fa-search" style="font-size: 60px; color: var(--border-color);"></i>
                        <h3 style="color: var(--text-color);">No se encontraron productos</h3>
                        <p style="color: var(--text-light);">Intenta con otros términos de búsqueda</p>
                        <button class="btn btn-primary" onclick="store.renderProducts()">
                            <i class="fas fa-undo"></i> Ver todos los productos
                        </button>
                    </div>
                `;
            } else {
                container.innerHTML = filtered.map(producto => {
                    const precioMinimo = this.getPrecioMinimo(producto);
                    return this.createProductCardHTML(producto, precioMinimo);
                }).join('');
            }
            
            const resultsContainer = document.getElementById('search-results');
            if (resultsContainer) resultsContainer.classList.remove('active');
            
            if (window.innerWidth < 768) {
                document.getElementById('search-container').classList.remove('active');
            }
        }, 100);
    }
    
    showAllSearchResults() {
        this.showSection('products');
        document.getElementById('search-input').value = '';
        const resultsContainer = document.getElementById('search-results');
        if (resultsContainer) resultsContainer.classList.remove('active');
        
        if (window.innerWidth < 768) {
            document.getElementById('search-container').classList.remove('active');
        }
    }
    
    // ==============================================
    // MÉTODOS DE UTILIDAD
    // ==============================================
    
    getColorName(color) {
        const nombres = { 
            blanco: 'Blanco', 
            color: 'Color Estándar', 
            especial: 'Color Personalizado' 
        };
        return nombres[color] || color;
    }
    
    getTerminacionName(terminacion) {
        const nombres = { 
            satinado: 'Satinado', 
            semibrillo: 'Semi Brillo', 
            repelente: 'Repelente' 
        };
        return nombres[terminacion] || terminacion;
    }
    
    updateProductPrice() {
        if (!this.currentProduct) return;
        
        let precio;
        if (this.currentProduct.precios) {
            precio = this.currentProduct.precios[this.selectionState.selectedColor][this.selectionState.selectedTerminacion];
        } else {
            precio = this.currentProduct.precio;
        }
        
        const precioElement = document.getElementById('final-price-compact');
        if (precioElement) {
            precioElement.innerHTML = `$${precio.toLocaleString('es-CL')}`;
        }
        
        this.updateSelectionSummary();
    }
    
    changeQuantity(delta) {
        const newQuantity = this.selectedQuantity + delta;
        if (newQuantity < 1 || newQuantity > this.currentProduct.stock) return;
        
        this.selectedQuantity = newQuantity;
        const input = document.getElementById('product-quantity');
        if (input) input.value = newQuantity;
    }
    
    changeProductImage(imageUrl, index) {
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            mainImage.src = imageUrl;
        }
        
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
    
    // ==============================================
    // VISTA RÁPIDA DE PRODUCTO
    // ==============================================
    
    quickViewProduct(id) {
        const producto = this.productos.find(p => p.id === id);
        if (!producto) return;
        
        const precioMinimo = this.getPrecioMinimo(producto);
        
        const quickViewHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        background: var(--surface-color); padding: 20px; border-radius: 12px; 
                        box-shadow: 0 20px 60px var(--shadow-color); z-index: 2001; max-width: 400px; 
                        width: 90%; max-height: 80vh; overflow-y: auto;">
                <button onclick="store.closeQuickView()" 
                        style="position: absolute; top: 10px; right: 10px; background: none; border: none; 
                               color: var(--text-light); cursor: pointer; font-size: 1.5rem;">
                    &times;
                </button>
                
                <div style="text-align: center;">
                    <img src="${producto.imagenes[0]}" 
                         alt="${producto.nombre}" 
                         style="width: 200px; height: 200px; object-fit: contain; margin-bottom: 15px;">
                    
                    <h3 style="color: var(--text-color); margin-bottom: 10px;">${producto.nombre}</h3>
                    
                    <div style="font-size: 1.4rem; color: var(--primary-color); font-weight: 800; margin: 10px 0;">
                        ${producto.precios ? `Desde $${precioMinimo.toLocaleString('es-CL')}` : `$${producto.precio.toLocaleString('es-CL')}`}
                    </div>
                    
                    <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 15px;">
                        ${producto.descripcion.substring(0, 120)}...
                    </p>
                    
                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button onclick="store.showProductDetail(${producto.id}); store.closeQuickView()" 
                                style="flex: 2; background: #3498db; color: white; border: none; 
                                       padding: 10px; border-radius: 8px; cursor: pointer;">
                            Ver Detalles
                        </button>
                        <button onclick="store.addToCart(${producto.id}); store.closeQuickView()" 
                                ${producto.stock === 0 ? 'disabled' : ''}
                                style="flex: 1; background: var(--secondary-color); color: white; 
                                       border: none; padding: 10px; border-radius: 8px; cursor: pointer;">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; 
                        background: var(--modal-bg); z-index: 2000;"></div>
        `;
        
        const quickViewDiv = document.createElement('div');
        quickViewDiv.id = 'quick-view-container';
        quickViewDiv.innerHTML = quickViewHTML;
        document.body.appendChild(quickViewDiv);
    }
    
    closeQuickView() {
        const quickView = document.getElementById('quick-view-container');
        if (quickView) {
            quickView.remove();
        }
    }
    
    // ==============================================
    // VISOR DE IMÁGENES
    // ==============================================
    
    openProductImageViewer(index) {
        if (!this.currentProduct) return;
        
        this.currentImageViewerIndex = index;
        const viewer = document.getElementById('image-viewer');
        const viewerImage = document.getElementById('viewer-image');
        const currentImage = document.getElementById('current-image');
        const totalImages = document.getElementById('total-images');
        
        viewerImage.src = this.currentProduct.imagenes[index];
        currentImage.textContent = index + 1;
        totalImages.textContent = this.currentProduct.imagenes.length;
        
        this.imageRotation = 0;
        this.imageZoom = 1;
        viewerImage.style.transform = 'scale(1) rotate(0deg)';
        
        viewer.style.display = 'block';
    }
    
    openImageViewer(index) {
        this.currentImageViewerIndex = index;
        const viewer = document.getElementById('image-viewer');
        const viewerImage = document.getElementById('viewer-image');
        const currentImage = document.getElementById('current-image');
        const totalImages = document.getElementById('total-images');
        
        viewerImage.src = this.workImages[index].url;
        currentImage.textContent = index + 1;
        totalImages.textContent = this.workImages.length;
        
        this.imageRotation = 0;
        this.imageZoom = 1;
        viewerImage.style.transform = 'scale(1) rotate(0deg)';
        
        viewer.style.display = 'block';
    }
    
    closeImageViewer() {
        const viewer = document.getElementById('image-viewer');
        viewer.style.display = 'none';
    }
    
    nextImage() {
        if (this.currentProduct) {
            this.currentImageViewerIndex = (this.currentImageViewerIndex + 1) % this.currentProduct.imagenes.length;
            const viewerImage = document.getElementById('viewer-image');
            const currentImage = document.getElementById('current-image');
            
            viewerImage.src = this.currentProduct.imagenes[this.currentImageViewerIndex];
            currentImage.textContent = this.currentImageViewerIndex + 1;
        } else if (this.workImages.length > 0) {
            this.currentImageViewerIndex = (this.currentImageViewerIndex + 1) % this.workImages.length;
            const viewerImage = document.getElementById('viewer-image');
            const currentImage = document.getElementById('current-image');
            
            viewerImage.src = this.workImages[this.currentImageViewerIndex].url;
            currentImage.textContent = this.currentImageViewerIndex + 1;
        }
        
        this.imageRotation = 0;
        this.imageZoom = 1;
        const viewerImage = document.getElementById('viewer-image');
        viewerImage.style.transform = 'scale(1) rotate(0deg)';
    }
    
    prevImage() {
        if (this.currentProduct) {
            this.currentImageViewerIndex = (this.currentImageViewerIndex - 1 + this.currentProduct.imagenes.length) % this.currentProduct.imagenes.length;
            const viewerImage = document.getElementById('viewer-image');
            const currentImage = document.getElementById('current-image');
            
            viewerImage.src = this.currentProduct.imagenes[this.currentImageViewerIndex];
            currentImage.textContent = this.currentImageViewerIndex + 1;
        } else if (this.workImages.length > 0) {
            this.currentImageViewerIndex = (this.currentImageViewerIndex - 1 + this.workImages.length) % this.workImages.length;
            const viewerImage = document.getElementById('viewer-image');
            const currentImage = document.getElementById('current-image');
            
            viewerImage.src = this.workImages[this.currentImageViewerIndex].url;
            currentImage.textContent = this.currentImageViewerIndex + 1;
        }
        
        this.imageRotation = 0;
        this.imageZoom = 1;
        const viewerImage = document.getElementById('viewer-image');
        viewerImage.style.transform = 'scale(1) rotate(0deg)';
    }
    
    zoomImage() {
        this.imageZoom = this.imageZoom === 1 ? 2 : 1;
        const viewerImage = document.getElementById('viewer-image');
        viewerImage.style.transform = `scale(${this.imageZoom}) rotate(${this.imageRotation}deg)`;
        
        this.showToast(this.imageZoom === 2 ? 'Zoom activado (haz clic para salir)' : 'Zoom desactivado');
    }
    
    rotateImage() {
        this.imageRotation = (this.imageRotation + 90) % 360;
        const viewerImage = document.getElementById('viewer-image');
        viewerImage.style.transform = `scale(${this.imageZoom}) rotate(${this.imageRotation}deg)`;
        
        this.showToast(`Imagen rotada ${this.imageRotation} grados`);
    }
    
    // ==============================================
    // HOME Y NAVEGACIÓN SECUNDARIA
    // ==============================================
    
    openHomeProduct(categoria) {
        this.showSection('products');
        
        setTimeout(() => {
            this.filterProducts(categoria);
            window.scrollTo({ top: 60, behavior: 'smooth' });
            
            let nombreCategoria = '';
            switch(categoria) {
                case 'esmaltes': nombreCategoria = 'Esmaltes'; break;
                case 'siding': nombreCategoria = 'Siding'; break;
                case 'acrizinc': nombreCategoria = 'AcriZinc'; break;
                case 'protectores-madera': nombreCategoria = 'Protectores de Madera'; break;
                default: nombreCategoria = categoria;
            }
            
            this.showToast(`Mostrando productos de ${nombreCategoria}`);
        }, 100);
    }
    
    // ==============================================
    // COOKIES
    // ==============================================
    
    acceptCookies() {
        this.cookiesAccepted = true;
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookies-banner').style.display = 'none';
        this.showToast('Preferencias de cookies guardadas');
    }
    
    rejectCookies() {
        this.cookiesAccepted = false;
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookies-banner').style.display = 'none';
        this.showToast('Cookies rechazadas');
    }
    
    // ==============================================
    // INFORMACIÓN LEGAL
    // ==============================================
    
    showLegalSection(section) {
        let title, content;
        
        switch(section) {
            case 'politica':
                title = 'Política de Privacidad';
                content = `
                    <h2>Política de Privacidad</h2>
                    <p>En Pinturas Monina, valoramos tu privacidad y nos comprometemos a proteger tus datos personales.</p>
                    
                    <h3>Información que recopilamos</h3>
                    <ul>
                        <li>Información de contacto (nombre, teléfono, email)</li>
                        <li>Datos de transacciones</li>
                        <li>Información de navegación (cookies)</li>
                    </ul>
                    
                    <h3>Uso de la información</h3>
                    <p>Utilizamos tu información para:</p>
                    <ul>
                        <li>Procesar tus pedidos</li>
                        <li>Brindar servicio al cliente</li>
                        <li>Enviar información sobre productos</li>
                        <li>Mejorar nuestra tienda online</li>
                    </ul>
                    
                    <p>Para ejercer tus derechos, contáctanos a: ekolors.pinturas@gmail.com</p>
                `;
                break;
                
            case 'terminos':
                title = 'Términos y Condiciones';
                content = `
                    <h2>Términos y Condiciones</h2>
                    <p>Bienvenido a Pinturas Monina. Al usar nuestro sitio web, aceptas estos términos.</p>
                    
                    <h3>1. Productos y precios</h3>
                    <ul>
                        <li>Todos los precios incluyen IVA (19%)</li>
                        <li>Los productos están sujetos a disponibilidad</li>
                        <li>Nos reservamos el derecho de modificar precios</li>
                    </ul>
                    
                    <h3>2. Pagos</h3>
                    <ul>
                        <li>Aceptamos múltiples métodos de pago</li>
                        <li>Las transacciones son seguras</li>
                        <li>Emitimos factura o boleta según requerimiento</li>
                    </ul>
                    
                    <h3>3. Garantías</h3>
                    <ul>
                        <li>Garantía de 1 año en todos nuestros productos</li>
                        <li>Condiciones de garantía sujetas a uso normal</li>
                        <li>No cubre daños por mal uso</li>
                    </ul>
                `;
                break;
                
            case 'reclamaciones':
                title = 'Libro de Reclamaciones';
                content = `
                    <h2>Libro de Reclamaciones</h2>
                    <p>En cumplimiento de la Ley 19.496 sobre Protección de los Derechos de los Consumidores.</p>
                    
                    <h3>¿Cómo presentar un reclamo?</h3>
                    <ul>
                        <li><strong>Vía WhatsApp:</strong> +56 9 9648 1758</li>
                        <li><strong>Vía Email:</strong> ekolors.pinturas@gmail.com</li>
                        <li><strong>Presencial:</strong> Javiera Carrera 133, Rancagua</li>
                    </ul>
                    
                    <h3>Plazos de respuesta</h3>
                    <ul>
                        <li>Acknowledgement: 5 días hábiles</li>
                        <li>Respuesta formal: 15 días hábiles</li>
                        <li>Solución definitiva: 30 días hábiles</li>
                    </ul>
                `;
                break;
                
            case 'cookies':
                title = 'Política de Cookies';
                content = `
                    <h2>Política de Cookies</h2>
                    <p>Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.</p>
                    
                    <h3>¿Qué son las cookies?</h3>
                    <p>Son pequeños archivos que se almacenan en tu dispositivo cuando visitas nuestro sitio.</p>
                    
                    <h3>Tipos de cookies que usamos</h3>
                    <ul>
                        <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                        <li><strong>Funcionales:</strong> Recuerdan tus preferencias</li>
                        <li><strong>Analíticas:</strong> Nos ayudan a mejorar el sitio</li>
                    </ul>
                    
                    <h3>Control de cookies</h3>
                    <p>Puedes controlar las cookies desde tu navegador:</p>
                    <ul>
                        <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                        <li>Firefox: Opciones → Privacidad y seguridad → Cookies</li>
                        <li>Safari: Preferencias → Privacidad → Cookies</li>
                    </ul>
                `;
                break;
                
            case 'informacion-legal-chile':
                title = 'Información Legal Chile';
                content = `
                    <h2>Información Legal Chile</h2>
                    <h3>Datos de la Empresa</h3>
                    <ul>
                        <li><strong>Razón Social:</strong> EKolors Limitada</li>
                        <li><strong>Nombre de Fantasía:</strong> Pinturas Monina</li>
                        <li><strong>Dirección:</strong> Javiera Carrera 133, Rancagua, Región de O'Higgins, Chile</li>
                        <li><strong>Teléfono:</strong> +56 9 9648 1758</li>
                        <li><strong>Email:</strong> ekolors.pinturas@gmail.com</li>
                    </ul>
                    
                    <h3>Información Comercial</h3>
                    <ul>
                        <li><i class="fas fa-percentage"></i> <strong>Todos los precios incluyen IVA (19%)</strong></li>
                        <li><i class="fas fa-file-contract"></i> Boleta o Factura disponible según tu necesidad</li>
                        <li><i class="fas fa-truck"></i> Despachos por Blue Express, Starken y Chilexpress</li>
                    </ul>
                    
                    <h3>Marco Legal</h3>
                    <p>Esta empresa cumple con:</p>
                    <ul>
                        <li>Ley 19.496 sobre Protección de los Derechos de los Consumidores</li>
                        <li>Ley 19.628 sobre Protección de la Vida Privada</li>
                    </ul>
                `;
                break;
        }
        
        const legalModal = document.createElement('div');
        legalModal.className = 'modal';
        legalModal.style.display = 'block';
        legalModal.innerHTML = `
            <div class="modal-content" style="max-width: 800px; max-height: 80vh; overflow-y: auto;">
                <span class="close-modal" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
                <div style="padding: 20px;">
                    ${content}
                    <div style="margin-top: 30px; text-align: center;">
                        <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.style.display='none'">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(legalModal);
        
        legalModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }
    
    // ==============================================
    // MODALES
    // ==============================================
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.id !== 'image-viewer' && modal.id !== 'cookies-banner') {
                modal.style.display = 'none';
            }
        });
        document.body.style.overflow = '';
    }
    
    // ==============================================
    // NOTIFICACIONES
    // ==============================================
    
    showToast(mensaje, tipo = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = mensaje;
        toast.className = 'toast';
        if (tipo === 'error') toast.classList.add('error');
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
    
    // ==============================================
    // EVENT LISTENERS Y UTILIDADES
    // ==============================================
    
    bindEvents() {
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
                this.closeImageViewer();
                this.closeQuickView();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                this.closeImageViewer();
                this.closeQuickView();
            }
        });
        
        document.addEventListener('contextmenu', (e) => {
            if (e.target.tagName === 'IMG') e.preventDefault();
        });
        
        document.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'IMG') e.preventDefault();
        });
        
        document.querySelectorAll('.modal-content').forEach(modal => {
            modal.addEventListener('wheel', (e) => {
                if (e.target === modal || modal.contains(e.target)) {
                    e.stopPropagation();
                }
            });
        });
        
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (menu && menu.classList.contains('active') && 
                !menu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                this.toggleMenu();
            }
        });
        
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Optimizar después del scroll
            }, 100);
        }, { passive: true });
    }
    
    initLazyLoad() {
        if (typeof LazyLoad !== 'undefined') {
            new LazyLoad({
                elements_selector: ".lazyload",
                threshold: 100,
                callback_loaded: (el) => {
                    el.classList.add('lazyloaded');
                }
            });
        }
    }
}

// ==============================================
// INICIALIZACIÓN GLOBAL
// ==============================================

let store;

document.addEventListener('DOMContentLoaded', () => {
    store = new PinturasStore();
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                store.searchProducts();
            }
        });
    }
    
    console.log('Pinturas Monina Rancagua - Tienda oficial');
    console.log('Javiera Carrera 133, Rancagua, Región de O\'Higgins, Chile');
    console.log('Teléfono: +56 9 9648 1758');
    console.log('Todos los precios incluyen IVA (19%)');
});

// Manejar offline/online
window.addEventListener('online', function() {
    if (store) store.showToast('Conexión restablecida');
});

window.addEventListener('offline', function() {
    if (store) store.showToast('Estás sin conexión. Algunas funciones pueden no estar disponibles', 'error');
});

// ==============================================
// EXPORTAR FUNCIONES AL SCOPE GLOBAL
// ==============================================

window.store = store;
window.toggleMenu = () => store.toggleMenu();
window.showSection = (section) => store.showSection(section);
window.toggleCart = () => store.toggleCart();
window.closeModal = () => store.closeModal();
window.searchProducts = () => store.searchProducts();
window.filterProducts = (filter) => store.filterProducts(filter);
window.showProductDetail = (id) => store.showProductDetail(id);
window.quickViewProduct = (id) => store.quickViewProduct(id);
window.closeQuickView = () => store.closeQuickView();
window.selectColorCompact = (color, element) => store.selectColorCompact(color, element);
window.selectTerminationCompact = (terminacion, element) => store.selectTerminationCompact(terminacion, element);
window.changeQuantity = (delta) => store.changeQuantity(delta);
window.changeProductImage = (img, index) => store.changeProductImage(img, index);
window.addToCart = (id) => store.addToCart(id);
window.addToCartFromModal = () => store.addToCartFromModal();
window.buyNow = () => store.buyNow();
window.updateCartItem = (index, cantidad) => store.updateCartItem(index, cantidad);
window.removeFromCart = (index) => store.removeFromCart(index);
window.checkout = (method) => store.checkout(method);
window.changePantoneCategory = (categoria) => store.changePantoneCategory(categoria);
window.selectPantoneColor = (nombre, codigo, categoria) => store.selectPantoneColor(nombre, codigo, categoria);
window.consultWhatsAppPantone = () => store.consultWhatsAppPantone();
window.handleSearchInput = () => store.handleSearchInput();
window.selectSearchResult = (id) => store.selectSearchResult(id);
window.showAllSearchResults = () => store.showAllSearchResults();
window.openImageViewer = (index) => store.openImageViewer(index);
window.openProductImageViewer = (index) => store.openProductImageViewer(index);
window.closeImageViewer = () => store.closeImageViewer();
window.prevImage = () => store.prevImage();
window.nextImage = () => store.nextImage();
window.zoomImage = () => store.zoomImage();
window.rotateImage = () => store.rotateImage();
window.openHomeProduct = (categoria) => store.openHomeProduct(categoria);
window.changeSpecTab = (tabId, element) => store.changeSpecTab(tabId, element);
window.acceptCookies = () => store.acceptCookies();
window.rejectCookies = () => store.rejectCookies();
window.showLegalSection = (section) => store.showLegalSection(section);
window.toggleSearch = () => store.toggleSearch();