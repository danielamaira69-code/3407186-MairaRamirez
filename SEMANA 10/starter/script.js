"use strict";

// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Dominio: Comi Puros
// ============================================

const DOMAIN_NAME = "COMI_PUROS";
const VALUE_LABEL = "productos";
const MAX_ITEMS = 1_000;

// ============================================
// DATOS
// ============================================

const items = [
  { id: 1, name: "Miel orgánica", price: 18000, stock: 10, active: true, category: "Endulzantes", origin: "Colombia" },
  { id: 2, name: "Quinua", price: 12000, stock: 5, active: true, category: "Granos" },
  { id: 3, name: "Aceite de coco", price: 25000, stock: 0, active: false, category: "Aceites", brand: "NaturalCo" },
  { id: 4, name: "Avena integral", price: 8000, stock: 20, active: true, category: "Cereales" },
  { id: 5, name: "Pan artesanal", price: 7000, stock: 2, active: true, category: "Panadería", glutenFree: false },
  { id: 6, name: "Café orgánico", price: 15000, stock: 8, active: true, category: "Bebidas", origin: "Huila" }
];

// ============================================
// FUNCIONES CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("No se pueden agregar más productos");
    return;
  }
  items.push(item);
  console.log(`Agregado: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active === true);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// FUNCIONES DE ANÁLISIS
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]).filter(v => typeof v === "number");

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// DISPLAY
// ============================================

const formatItem = (item) => {
  return `[${item.id}] ${item.name.padEnd(20)} | Precio: ${item.price
    .toString()
    .padStart(6)} | Stock: ${item.stock
    .toString()
    .padStart(3)} | ${item.category ?? "N/A"}`;
};

const buildReport = () => {
  console.log(`\nReporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // Listado
  items.forEach(item => console.log(formatItem(item)));

  // Activos
  const active = getActive();
  console.log(`\nActivos: ${active.length} | Inactivos: ${items.length - active.length}`);

  // Estadísticas
  const stats = calculateStats("price");
  console.log(`\nEstadísticas de precio:`);
  console.log(`Min: ${stats.min}`);
  console.log(`Max: ${stats.max}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);
  console.log(`Total: ${stats.total}`);

  // Object.entries
  console.log("\nPropiedades del primer producto:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log(`\nTotal de productos: ${items.length}`);
  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Paso 1
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado\n");

// Paso 2
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3
const filtered = filterByField("category", "Granos");
console.log(`Filtro category=Granos: ${filtered.length} resultados\n`);

// Paso 4
const updated = updateItem(1, { price: 20000 });
console.log(`Actualizado id=1: price=${updated.find(i => i.id === 1)?.price}\n`);

// Paso 5
const stats = calculateStats("price");
console.log(`Estadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}\n`);

// Paso 6
buildReport();

// Agregar nuevo producto
addItem({ id: 7, name: "Frutas orgánicas", price: 10000, stock: 12, active: true, category: "Frutas" });