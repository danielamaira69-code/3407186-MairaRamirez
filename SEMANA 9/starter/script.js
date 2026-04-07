"use strict";

// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// Dominio: Comi Puros
// ============================================

const DOMAIN_NAME = "Comi Puros";
const VALUE_LABEL = "productos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Miel orgánica", category: "Endulzantes", price: 18000, stock: 10, available: true, origin: "Colombia" },
  { id: 2, name: "Quinua", category: "Granos", price: 12000, stock: 5, available: true },
  { id: 3, name: "Aceite de coco", category: "Aceites", price: 25000, stock: 0, available: false, brand: "NaturalCo" },
  { id: 4, name: "Avena integral", category: "Cereales", price: 8000, stock: 20, available: true },
  { id: 5, name: "Pan artesanal", category: "Panadería", price: 7000, stock: 2, available: true, glutenFree: false },
  { id: 6, name: "Café orgánico", category: "Bebidas", price: 15000, stock: 8, available: true, origin: "Huila" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\nDetalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)} : ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]).filter(v => typeof v === "number");

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\nEstadísticas de ${numericKey}:`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(2)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: ${item.price}`);
  console.log(`Stock: ${item.stock}`);

  if (Object.hasOwn(item, "origin")) {
    console.log(`Origen: ${item.origin}`);
  }
  if (Object.hasOwn(item, "brand")) {
    console.log(`Marca: ${item.brand}`);
  }
  if (Object.hasOwn(item, "glutenFree")) {
    console.log(`Libre de gluten: ${item.glutenFree}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\nPropiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.available && item.stock > 0);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithTax: +(item.price * 1.19).toFixed(2)
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total de productos: ${items.length}`);

  const available = getAvailable().length;
  console.log(`Disponibles: ${available}`);

  calculateStats("price");

  console.log("\nListado ordenado por precio:");
  sortByNumericProp(true).forEach(item => {
    console.log(`${item.name} - ${item.price}`);
  });

  const sorted = sortByNumericProp(true);
  console.log(`\nMás barato: ${sorted[0].name}`);
  console.log(`Más caro: ${sorted[sorted.length - 1].name}`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\nIniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total de ${VALUE_LABEL}: ${items.length}`);

// 1
inspectItem(items[0]);

// 2
calculateStats("price");

// 3
items.forEach(showWithOptionals);

// 4
printAllProperties(items[0]);

// 5
const updated = updateItem(items[0], { price: 20000 });
console.log("\nProducto actualizado (inmutable):", updated);

// 6
console.log("\nDisponibles:", getAvailable());

// 7
console.log("\nBuscar id 2:", findById(2));
console.log("Buscar id 99:", findById(99));

// 8
console.log("\nCon impuesto:", addCalculatedProp());

// 9
console.log("\nOrdenados:", sortByNumericProp());

// 10
buildReport();