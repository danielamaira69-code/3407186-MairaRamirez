"use strict";

// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Comi Puros (productos orgánicos)
// ============================================

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Comi Puros";
const VALUE_LABEL = "precio";
const CURRENCY = "COP";

// Lista de productos orgánicos
const products = [
  { id: 1, name: "Miel orgánica", category: "Endulzantes", price: 18000, stock: 10, available: true },
  { id: 2, name: "Quinua", category: "Granos", price: 12000, stock: 5, available: true },
  { id: 3, name: "Aceite de coco", category: "Aceites", price: 25000, stock: 0, available: false },
  { id: 4, name: "Avena integral", category: "Cereales", price: 8000, stock: 20, available: true },
  { id: 5, name: "Pan artesanal", category: "Panadería", price: 7000, stock: 2, available: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatProduct = (product) => {
  return `${product.name} [${product.category}] — Stock: ${product.stock} — ${CURRENCY} ${product.price}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateTotal = (price, quantity, discount = 0) => {
  return +(price * quantity * (1 - discount / 100)).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isAvailable = (product) => {
  return product.available === true && product.stock > 0;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatPrice = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (products.length === 0) {
  console.log("\nNo hay productos registrados.");
} else {
  // --- Listado ---
  console.log("\nListado de productos:");
  let lineNumber = 1;

  for (const product of products) {
    console.log(`  ${lineNumber}. ${formatProduct(product)}`);
    lineNumber++;
  }

  // --- Validación ---
  let availableCount = 0;

  for (const product of products) {
    if (isAvailable(product)) {
      availableCount++;
    }
  }

  console.log(`\nProductos disponibles: ${availableCount} / ${products.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const product of products) {
    totalValue += product.price;
  }

  console.log(formatPrice(totalValue, "Total inventario"));
}

console.log(`\n${"═".repeat(45)}\n`);