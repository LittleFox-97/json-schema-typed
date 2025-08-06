/// <reference types="./draft-2020-12.ts" />
// @generated
const draft = "2020-12";
const $schema = "https://json-schema.org/draft/2020-12/schema";
var ContentEncoding;
(function(ContentEncoding) {
    ContentEncoding["7bit"] = "7bit";
    ContentEncoding["8bit"] = "8bit";
    ContentEncoding["Base64"] = "base64";
    ContentEncoding["Binary"] = "binary";
    ContentEncoding["IETFToken"] = "ietf-token";
    ContentEncoding["QuotedPrintable"] = "quoted-printable";
    ContentEncoding["XToken"] = "x-token";
})(ContentEncoding || (ContentEncoding = {}));
var Format;
(function(Format) {
    Format["Date"] = "date";
    Format["DateTime"] = "date-time";
    Format["Duration"] = "duration";
    Format["Email"] = "email";
    Format["Hostname"] = "hostname";
    Format["IDNEmail"] = "idn-email";
    Format["IDNHostname"] = "idn-hostname";
    Format["IPv4"] = "ipv4";
    Format["IPv6"] = "ipv6";
    Format["IRI"] = "iri";
    Format["IRIReference"] = "iri-reference";
    Format["JSONPointer"] = "json-pointer";
    Format["JSONPointerURIFragment"] = "json-pointer-uri-fragment";
    Format["RegEx"] = "regex";
    Format["RelativeJSONPointer"] = "relative-json-pointer";
    Format["Time"] = "time";
    Format["URI"] = "uri";
    Format["URIReference"] = "uri-reference";
    Format["URITemplate"] = "uri-template";
    Format["UUID"] = "uuid";
})(Format || (Format = {}));
var TypeName;
(function(TypeName) {
    TypeName["Array"] = "array";
    TypeName["Boolean"] = "boolean";
    TypeName["Integer"] = "integer";
    TypeName["Null"] = "null";
    TypeName["Number"] = "number";
    TypeName["Object"] = "object";
    TypeName["String"] = "string";
})(TypeName || (TypeName = {}));
const keywords = [
    "$anchor",
    "$comment",
    "$defs",
    "$dynamicAnchor",
    "$dynamicRef",
    "$id",
    "$ref",
    "$schema",
    "$vocabulary",
    "additionalItems",
    "additionalProperties",
    "allOf",
    "anyOf",
    "const",
    "contains",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "default",
    "definitions",
    "dependencies",
    "dependentRequired",
    "dependentSchemas",
    "deprecated",
    "description",
    "else",
    "enum",
    "examples",
    "exclusiveMaximum",
    "exclusiveMinimum",
    "format",
    "if",
    "items",
    "maxContains",
    "maximum",
    "maxItems",
    "maxLength",
    "maxProperties",
    "minContains",
    "minimum",
    "minItems",
    "minLength",
    "minProperties",
    "multipleOf",
    "not",
    "oneOf",
    "pattern",
    "patternProperties",
    "prefixItems",
    "properties",
    "propertyNames",
    "readOnly",
    "required",
    "then",
    "title",
    "type",
    "unevaluatedItems",
    "unevaluatedProperties",
    "uniqueItems",
    "writeOnly"
];
export { draft as draft };
export { $schema as $schema };
export { ContentEncoding as ContentEncoding };
export { Format as Format };
export { TypeName as TypeName };
export { keywords as keywords };

//# sourceMappingURL=draft-2020-12.js.map