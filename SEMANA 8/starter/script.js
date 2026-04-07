"use strict";

// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Comi Puros
// ============================================

const DOMAIN_NAME = "Comi Puros";
const VALUE_LABEL = "productos";

// ============================================
// 1. ARRAY INICIAL — Inventario
// ============================================

const items = [
  { id: 1, name: "Miel orgánica", category: "Endulzantes", price: 18000, stock: 10, available: true },
  { id: 2, name: "Quinua", category: "Granos", price: 12000, stock: 5, available: true },
  { id: 3, name: "Aceite de coco", category: "Aceites", price: 25000, stock: 0, available: false },
  { id: 4, name: "Avena integral", category: "Cereales", price: 8000, stock: 20, available: true },
  { id: 5, name: "Pan artesanal", category: "Panadería", price: 7000, stock: 2, available: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`Eliminado: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  return items.filter(item => item.available === true && item.stock > 0);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — Precio: ${item.price} — Stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo producto
addItem({
  id: 6,
  name: "Café orgánico",
  category: "Bebidas",
  price: 15000,
  stock: 8,
  available: true
});

// Agregar producto prioritario
addPriorityItem({
  id: 0,
  name: "Frutas orgánicas",
  category: "Frutas",
  price: 10000,
  stock: 15,
  available: true
});

// Eliminar elemento del medio
removeByIndex(2);

// Eliminar último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Búsqueda
const found = findByName("Quinua");
console.log("Resultado de búsqueda:", found ? formatItem(found) : "No encontrado");

// Filtrado
const activeItems = getActiveItems();
console.log(`Productos disponibles: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, {
  id: 99,
  name: "Producto extra",
  category: "Otros",
  price: 5000,
  stock: 3,
  available: true
}];

console.log(`Snapshot (sin modificar inventario original): ${snapshot.length} productos`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento del 10%
const discountedPrices = items.map(item => ({
  name: item.name,
  discountedPrice: item.price * 0.9
}));
console.log("Precios con descuento:", discountedPrices);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);