import React from 'react';
import { Chapter } from './types';

// Icons as simple SVG components to avoid external deps
export const Icons = {
  Book: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Structure: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Brain: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 12.5 0 0 1 14.5 2" />
      <path d="M9.5 22A2.5 12.5 0 0 0 14.5 22" />
      <path d="M2 12h20" />
      <path d="M2 12a10 10 0 0 1 10-10 10 10 0 0 1 10 10" />
      <path d="M2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10" />
    </svg>
  ),
  Search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Chart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Future: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Feather: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  )
};

export const BOOK_CONTENT: Chapter[] = [
  {
    id: 'overview',
    title: 'Génesis y Estructura',
    subtitle: 'Descripción General y Patrones de Diseño',
    icon: Icons.Structure,
    sections: [
      {
        content: [
          "En los anales del desarrollo de software moderno, este sistema se erige como un servicio de búsqueda avanzada diseñado para plataformas del sector salud y comercial. Forjado en las llamas de NestJS y templado con TypeORM, su propósito es conectar profesionales y empresas con precisión quirúrgica.",
          "Su arquitectura se sostiene sobre tres pilares fundamentales que garantizan robustez y flexibilidad:"
        ],
        listItems: [
          "Patrón Repository: Separa el acceso a datos de la lógica sagrada del negocio.",
          "Patrón Builder: Permite la construcción flexible de consultas complejas.",
          "Patrón Strategy: Implementa múltiples algoritmos de búsqueda (Exact, Phonetic, Full-text) intercambiables."
        ],
        code: {
          language: "typescript",
          code: `@InjectRepository(User)
private userRepository: Repository<User>

// Builder Pattern en acción
const qb = this.userRepository.createQueryBuilder('user')
  .leftJoinAndSelect('user.personalInformation', 'info')`
        }
      }
    ]
  },
  {
    id: 'concepts',
    title: 'Conceptos Arcanos',
    subtitle: 'Técnicas Avanzadas de Programación',
    icon: Icons.Brain,
    sections: [
      {
        title: "Caching Inteligente",
        content: [
          "Para evitar la fatiga del sistema, se implementó una memoria temporal (memoización) con expiración y claves compuestas. Esto permite recuperar perfiles complejos sin consultar repetidamente la base de datos."
        ],
        code: {
          language: "typescript",
          code: `const cacheKey = \`getAllUsersProfiles:\${page}:\${limit}:\${JSON.stringify(filters)}\`;
private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutos`
        }
      },
      {
        title: "Normalización y Tokenización",
        content: [
          "El caos de la entrada de usuario se ordena mediante rigurosos procesos de normalización. Los acentos se eliminan, el texto se purifica y se prepara para una comparación justa."
        ],
        code: {
          language: "typescript",
          code: `private normalizeString(str?: string): string {
  return str
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '') // Elimina diacríticos
    .toLowerCase()
    .trim();
}`
        }
      },
      {
        title: "Paralelización",
        content: ["El tiempo es oro. Las operaciones de entrada/salida se ejecutan en paralelo, recuperando múltiples conjuntos de datos simultáneamente mediante Promise.all."]
      }
    ]
  },
  {
    id: 'logic',
    title: 'El Arte de la Búsqueda',
    subtitle: 'Lógica de Relevancia y Clasificación',
    icon: Icons.Search,
    sections: [
      {
        title: "Relevancia Multidimensional",
        content: [
          "No todos los resultados son iguales. El sistema calcula un puntaje de relevancia utilizando una compleja fórmula SQL que pondera coincidencias exactas, similaridad fonética y proximidad de texto."
        ],
        code: {
          language: "sql",
          code: `GREATEST(
  CASE WHEN lower(unaccent(name)) LIKE :likeQuery THEN 0.8 ELSE 0 END,
  COALESCE(SIMILARITY(unaccent(name), :normalizedQuery), 0),
  COALESCE(WORD_SIMILARITY(unaccent(name), :normalizedQuery), 0)
)`
        }
      },
      {
        title: "Estrategias de Matching",
        content: [
          "El sistema clasifica el origen de la coincidencia para informar al usuario por qué ve lo que ve: ¿Fue una coincidencia exacta? ¿Fonética? ¿Semántica?"
        ]
      }
    ]
  },
  {
    id: 'analysis',
    title: 'Análisis Crítico',
    subtitle: 'Complejidad y Fortalezas',
    icon: Icons.Chart,
    sections: [
      {
        title: "Complejidad Computacional",
        content: [
          "En el peor de los casos, la complejidad temporal se acerca a O(n × m), pero el uso inteligente de índices y caché reduce el caso promedio a O(log n).",
          "Espacialmente, el sistema mantiene un perfil bajo, optimizando la memoria mediante streaming y limpieza de caché."
        ]
      },
      {
        title: "Fortalezas del Diseño",
        content: [],
        listItems: [
          "Escalabilidad Horizontal: El caché es distribuible.",
          "Flexibilidad: Criterios combinables sin fricción.",
          "Mantenibilidad: Código estructurado y logs detallados.",
          "Experiencia de Usuario: Sugerencias y ordenamiento inteligente."
        ]
      }
    ]
  },
  {
    id: 'improvements',
    title: 'Reformas Necesarias',
    subtitle: 'Áreas de Mejora y Refactorización',
    icon: Icons.Feather,
    sections: [
      {
        title: "Principio de Responsabilidad Única",
        content: [
          "Los métodos monolíticos de más de 500 líneas deben ser desmantelados. Se propone dividir el servicio principal en estrategias especializadas."
        ],
        code: {
          language: "typescript",
          code: `// SUGERIDO:
class SearchService {
  private userSearch: UserSearchStrategy;
  private businessSearch: BusinessSearchStrategy;
  private relevanceCalculator: RelevanceCalculator;
}`
        }
      },
      {
        title: "Manejo de Errores",
        content: [
          "Abandonar el console.log en favor de un sistema de errores tipados y estructurados que proporcionen contexto real del fallo."
        ]
      }
    ]
  },
  {
    id: 'future',
    title: 'Profecías y Futuro',
    subtitle: 'El Camino hacia la Inteligencia Artificial',
    icon: Icons.Future,
    sections: [
      {
        title: "Integración de Machine Learning",
        content: [
          "El futuro yace en aprender del comportamiento. Un 'Ranker' basado en ML podría personalizar los resultados basándose en el historial del usuario."
        ]
      },
      {
        title: "Búsqueda Semántica",
        content: [
          "Trasvasar la búsqueda literal a la conceptual mediante Embeddings (Word2Vec, BERT), permitiendo al sistema entender la intención más allá de las palabras."
        ]
      },
      {
        title: "Geospatial y Analytics",
        content: [
          "Implementar PostGIS para búsquedas por proximidad física y un sistema de analytics para rastrear qué buscan realmente los usuarios."
        ]
      }
    ]
  }
];