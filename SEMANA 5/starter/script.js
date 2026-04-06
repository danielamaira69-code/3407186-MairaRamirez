// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Cosmi Puros (cosméticos naturales)
// ============================================

// ============================================
// SECCIÓN 1: Datos del producto
// ============================================

const elementName = "Crema facial de aloe vera";
const elementStatus = "active"; // active / inactive
const elementValue = 85; // nivel de stock o popularidad (0 - 100)
const elementType = "skincare"; // skincare, haircare, bodycare
const elementInfo = {
  detail: "Hidratante natural para piel sensible",
  ingredientePrincipal: "Aloe vera"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Producto estrella ";
} else if (elementValue >= 50) {
  classification = "Producto popular ";
} else {
  classification = "Producto con baja rotación ";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Disponible " : "No disponible ❌";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "skincare":
    typeLabel = "Cuidado facial ";
    break;
  case "haircare":
    typeLabel = "Cuidado capilar ";
    break;
  case "bodycare":
    typeLabel = "Cuidado corporal ";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.ingredientePrincipal ?? "Ingrediente no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN - COSMI PUROS");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ingrediente principal: ${safeProperty}`);
console.log("=".repeat(40));