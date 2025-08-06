import { defineValidationSpec, desc } from "../../spec.ts";

// Reflects spec commit: 0a2da56b7553b273443b03c1ea494a12b707354b

export default defineValidationSpec({
  $copyright: {
    credits: [
      "IETF Trust <https://www.ietf.org/>",
      "Austin Wright <aaa@bzfx.net>",
      "Henry Andrews <henry@cloudflare.com>",
      "Geraint Luff <luffgd@gmail.com>",
      "Cloudflare, Inc. <https://www.cloudflare.com/>",
    ],
    year: 2013,
  },
  $docsUrl: "https://json-schema.org/draft-04/json-schema-validation.html",
  $draft: "4",
  $license: desc`
    BSD-2-Clause License

    Original source code is copyright (c) 2019-2022 Jeremy Rylan
    <https://github.com/jrylan>

    {COPYRIGHT}

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    POSSIBILITY OF SUCH DAMAGE.
  `,
  $schemaUrl: "http://json-schema.org/draft-04/schema#",
  enums: {
    typeName: {
      description:
        "Enum consisting of simple type names for the `type` keyword",
      title: "TypeName",
      values: {
        Array: {
          description: desc`
            Value MUST be an array.
          `,
          value: "array",
        },
        Boolean: {
          description: desc`
            Value MUST be a boolean.
          `,
          value: "boolean",
        },
        Integer: {
          description: desc`
            Value MUST be an integer, no floating point numbers are allowed. 
            This is a subset of the number type.
          `,
          value: "integer",
        },
        Null: {
          description: desc`
            Value MUST be null. Note this is mainly for purpose of being able
            use union types to define nullability. If this type is not included
            in a union, null values are not allowed (the primitives listed above
            do not allow nulls on their own).
          `,
          value: "null",
        },
        Number: {
          description: desc`
            Value MUST be a number, floating point numbers are allowed.
          `,
          value: "number",
        },
        Object: {
          description: desc`
            Value MUST be an object.
          `,
          value: "object",
        },
        String: {
          description: desc`
            Value MUST be a string.
          `,
          value: "string",
        },
      },
    },
  },
  keywords: {
    $ref: {
      description: desc`
        The \`$ref\` keyword is used to reference a schema, and provides the 
        ability to validate recursive structures through self-reference.

        An object schema with a \`$ref\` property MUST be interpreted as a 
        \`$ref\` reference. The value of the \`$ref\` property MUST be a URI 
        Reference. Resolved against the current URI base, it identifies the URI 
        of a schema to use. All other properties in a \`$ref\` object MUST be
        ignored.

        The URI is not a network locator, only an identifier. A schema need not 
        be downloadable from the address if it is a network-addressable URL, and
        implementations SHOULD NOT assume they should perform a network 
        operation when they encounter a network-addressable URI.

        A schema MUST NOT be run into an infinite loop against a schema. For
        example, if two schemas \`\"#alice\"\` and \`\"#bob\"\` both have an 
        \`allOf\` property that refers to the other, a naive validator might get 
        stuck in an infinite recursive loop trying to validate the instance. 
        Schemas SHOULD NOT make use of infinite recursive nesting like this; the
        behavior is undefined.
      `,
      format: "uri-reference",
      type: "string",
    },
    $schema: {
      description: desc`
        The \`$schema\` keyword is both used as a JSON Schema version identifier 
        and the location of a resource which is itself a JSON Schema, which 
        describes any schema written for this particular version.

        The value of this keyword MUST be a [URI][RFC3986] (containing a scheme)
        and this URI MUST be normalized. The current schema MUST be valid 
        against the meta-schema identified by this URI.

        If this URI identifies a retrievable resource, that resource SHOULD be 
        of media type \`application/schema+json\`.

        The \`$schema\` keyword SHOULD be used in a root schema. It MUST NOT 
        appear in subschemas.

        Values for this property are defined in other documents and by other
        parties. JSON Schema implementations SHOULD implement support for 
        current and previous published drafts of JSON Schema vocabularies as 
        deemed reasonable.

        [RFC3986]: https://datatracker.ietf.org/doc/html/rfc3986
      `,
      format: "uri",
      type: "string",
    },
    additionalItems: {
      description: desc`
        The value of \`additionalItems\` MUST be a valid JSON Schema.

        This keyword determines how child instances validate for arrays, and 
        does not directly validate the immediate instance itself.

        If \`items\` is an array of schemas, validation succeeds if every 
        instance element at a position greater than the size of \`items\` 
        validates against \`additionalItems\`.

        Otherwise, \`additionalItems\` MUST be ignored, as the \`items\` schema
        (possibly the default value of an empty schema) is applied to all 
        elements.

        Omitting this keyword has the same behavior as an empty schema.
      `,
      type: "JSONSchema",
    },
    additionalProperties: {
      description: desc`
        The value of \`additionalProperties\` MUST be a valid JSON Schema.

        This keyword determines how child instances validate for objects, and 
        does not directly validate the immediate instance itself.

        Validation with \`additionalProperties\` applies only to the child 
        values of instance names that do not match any names in \`properties\`, 
        and do not match any regular expression in \`patternProperties\`.

        For all such properties, validation succeeds if the child instance
        validates against the \`additionalProperties\` schema.

        Omitting this keyword has the same behavior as an empty schema.
      `,
      type: "JSONSchema",
    },
    allOf: {
      description: desc`
        This keyword's value MUST be a non-empty array. Each item of the array 
        MUST be a valid JSON Schema.

        An instance validates successfully against this keyword if it validates
        successfully against all schemas defined by this keyword's value.
      `,
      items: { type: "JSONSchema<Narrowable>" },
      type: "array",
    },
    anyOf: {
      description: desc`
        This keyword's value MUST be a non-empty array. Each item of the array 
        MUST be a valid JSON Schema.

        An instance validates successfully against this keyword if it validates
        successfully against at least one schema defined by this keyword's 
        value.
      `,
      items: { type: "JSONSchema<Narrowable>" },
      type: "array",
    },
    default: {
      description: desc`
        This keyword can be used to supply a default JSON value associated with 
        a particular schema. It is RECOMMENDED that a \`default\` value be valid
        against the associated schema.
      `,
      type: "Value",
    },
    definitions: {
      additionalProperties: { type: "JSONSchema" },
      description: desc`
        The \`definitions\` keywords provides a standardized location for schema
        authors to inline re-usable JSON Schemas into a more general schema. The
        keyword does not directly affect the validation result.

        This keyword's value MUST be an object. Each member value of this object
        MUST be a valid JSON Schema.
      `,
      type: "object",
    },
    dependencies: {
      description: desc`
        This keyword specifies rules that are evaluated if the instance is an
        object and contains a certain property.

        This keyword's value MUST be an object. Each property specifies a
        dependency. Each dependency value MUST be an array or a valid JSON 
        Schema.

        If the dependency value is a subschema, and the dependency key is a
        property in the instance, the entire instance must validate against the
        dependency value.

        If the dependency value is an array, each element in the array, if any,
        MUST be a string, and MUST be unique. If the dependency key is a 
        property in the instance, each of the items in the dependency value must
        be a property that exists in the instance.

        Omitting this keyword has the same behavior as an empty object.
      `,
      oneOf: [{
        additionalProperties: {
          oneOf: [
            { items: { type: "string" }, type: "array" },
            { type: "JSONSchema" },
          ],
        },
        type: "object",
      }],
    },
    description: {
      description: desc`
        Can be used to decorate a user interface with explanation or information
        about the data produced.
      `,
      type: "string",
    },
    enum: {
      description: desc`
        The value of this keyword MUST be an array. This array SHOULD have at 
        least one element. Elements in the array SHOULD be unique.

        An instance validates successfully against this keyword if its value is
        equal to one of the elements in this keyword's array value.

        Elements in the array might be of any type, including \`null\`.
      `,
      items: { type: "Value" },
      type: "array",
    },
    exclusiveMaximum: {
      description: desc`
        The value of \`exclusiveMaximum\` MUST be a boolean.

        If \`exclusiveMaximum\` is true, then the instance is valid only if it
        is strictly less than (\`<\`) the value of the \`maximum\` keyword.

        If \`exclusiveMaximum\` is false (or absent), then the instance is valid
        if it is less than or equal to (\`<=\`) the value of the \`maximum\`
        keyword.
      `,
      type: "boolean",
    },
    exclusiveMinimum: {
      description: desc`
        The value of \`exclusiveMinimum\` MUST be a boolean.

        If \`exclusiveMinimum\` is true, then the instance is valid only if it
        is strictly greater than (\`>\`) the value of the \`minimum\` keyword.

        If \`exclusiveMinimum\` is false (or absent), then the instance is valid
        if it is greater than or equal to (\`>=\`) the value of the \`minimum\`
        keyword.
      `,
      type: "boolean",
    },
    format: {
      description: desc`
        The \`format\` keyword functions as both an [annotation][annotation] and 
        as an [assertion][assertion]. While no special effort is required to 
        implement it as an annotation conveying semantic meaning, implementing 
        validation is non-trivial.

        Implementations MAY support the \`format\` keyword as a validation 
        assertion.

        Implementations MAY add custom \`format\` attributes. Save for agreement
        between parties, schema authors SHALL NOT expect a peer implementation 
        to support this keyword and/or custom \`format\` attributes.

        [annotation]: https://json-schema.org/draft-04/json-schema-validation.html#annotations
        [assertion]: https://json-schema.org/draft-04/json-schema-validation.html#assertions
      `,
      type: "string",
    },
    items: {
      description: desc`
        The value of \`items\` MUST be either a valid JSON Schema or an array of
        valid JSON Schemas.

        This keyword determines how child instances validate for arrays, and 
        does not directly validate the immediate instance itself.

        If \`items\` is a schema, validation succeeds if all elements in the 
        array successfully validate against that schema.

        If \`items\` is an array of schemas, validation succeeds if each element 
        of the instance validates against the schema at the same position, if 
        any.

        Omitting this keyword has the same behavior as an empty schema.
      `,
      oneOf: [
        { items: { type: "JSONSchema" }, type: "array" },
        { type: "JSONSchema" },
      ],
    },
    maximum: {
      description: desc`
        The value of \`maximum\` MUST be a number, representing an inclusive 
        upper limit for a numeric instance.

        If the instance is a number, then this keyword validates only if the
        instance is less than or exactly equal to \`maximum\`.
      `,
      type: "number",
    },
    maxItems: {
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        An array instance is valid against \`maxItems\` if its size is less 
        than, or equal to, the value of this keyword.
      `,
      minimum: 0,
      type: "integer",
    },
    maxLength: {
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        A string instance is valid against this keyword if its length is less 
        than, or equal to, the value of this keyword.

        The length of a string instance is defined as the number of its 
        characters as defined by [RFC 7159][RFC7159].

        [RFC7159]: https://datatracker.ietf.org/doc/html/rfc7159
      `,
      minimum: 0,
      type: "integer",
    },
    maxProperties: {
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        An object instance is valid against \`maxProperties\` if its number of
        \`properties\` is less than, or equal to, the value of this keyword.
      `,
      minimum: 0,
      type: "integer",
    },
    minimum: {
      description: desc`
        The value of \`minimum\` MUST be a number, representing an inclusive 
        lower limit for a numeric instance.

        If the instance is a number, then this keyword validates only if the
        instance is greater than or exactly equal to \`minimum\`.
      `,
      type: "number",
    },
    minItems: {
      default: 0,
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        An array instance is valid against \`minItems\` if its size is greater 
        than, or equal to, the value of this keyword.

        Omitting this keyword has the same behavior as a value of \`0\`.
      `,
      minimum: 0,
      type: "integer",
    },
    minLength: {
      default: 0,
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        A string instance is valid against this keyword if its length is greater
        than, or equal to, the value of this keyword.

        The length of a string instance is defined as the number of its 
        characters as defined by [RFC 7159][RFC7159].

        Omitting this keyword has the same behavior as a value of \`0\`.

        [RFC7159]: https://datatracker.ietf.org/doc/html/rfc7159
      `,
      minimum: 0,
      type: "integer",
    },
    minProperties: {
      default: 0,
      description: desc`
        The value of this keyword MUST be a non-negative integer.

        An object instance is valid against \`minProperties\` if its number of
        \`properties\` is greater than, or equal to, the value of this keyword.

        Omitting this keyword has the same behavior as a value of \`0\`.
      `,
      minimum: 0,
      type: "integer",
    },
    multipleOf: {
      description: desc`
        The value of \`multipleOf\` MUST be a number, strictly greater than 
        \`0\`.

        A numeric instance is valid only if division by this keyword's value
        results in an integer.
      `,
      exclusiveMinimum: 0,
      type: "number",
    },
    not: {
      description: desc`
        This keyword's value MUST be a valid JSON Schema.

        An instance is valid against this keyword if it fails to validate
        successfully against the schema defined by this keyword.
      `,
      type: "JSONSchema<Narrowable>",
    },
    oneOf: {
      description: desc`
        This keyword's value MUST be a non-empty array. Each item of the array 
        MUST be a valid JSON Schema.

        An instance validates successfully against this keyword if it validates
        successfully against exactly one schema defined by this keyword's value.
      `,
      items: { type: "JSONSchema<Narrowable>" },
      type: "array",
    },
    pattern: {
      description: desc`
        The value of this keyword MUST be a string. This string SHOULD be a 
        valid regular expression, according to the [ECMA-262][ecma262] regular 
        expression dialect.

        A string instance is considered valid if the regular expression matches 
        the instance successfully. Recall: regular expressions are not 
        implicitly anchored.

        [ecma262]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
      `,
      format: "regex",
      type: "string",
    },
    patternProperties: {
      additionalProperties: { type: "JSONSchema" },
      description: desc`
        The value of \`patternProperties\` MUST be an object. Each property name 
        of this object SHOULD be a valid regular expression, according to the 
        [ECMA-262][ecma262] regular expression dialect. Each property value of 
        this object MUST be a valid JSON Schema.

        This keyword determines how child instances validate for objects, and 
        does not directly validate the immediate instance itself. Validation of 
        the primitive instance type against this keyword always succeeds.

        Validation succeeds if, for each instance name that matches any regular
        expressions that appear as a property name in this keyword's value, the
        child instance for that name successfully validates against each schema
        that corresponds to a matching regular expression.

        Omitting this keyword has the same behavior as an empty object.

        [ecma262]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
      `,
      type: "object",
    },
    properties: {
      additionalProperties: { type: "JSONSchema" },
      description: desc`
        The value of \`properties\` MUST be an object. Each value of this object 
        MUST be a valid JSON Schema.

        This keyword determines how child instances validate for objects, and 
        does not directly validate the immediate instance itself.

        Validation succeeds if, for each name that appears in both the instance 
        and as a name within this keyword's value, the child instance for that 
        name successfully validates against the corresponding schema.

        Omitting this keyword has the same behavior as an empty object.
      `,
      type: "object",
    },
    required: {
      description: desc`
        The value of this keyword MUST be an array. Elements of this array, if 
        any, MUST be strings, and MUST be unique.

        An object instance is valid against this keyword if every item in the 
        array is the name of a property in the instance.

        Omitting this keyword has the same behavior as an empty array.
      `,
      items: { type: "string" },
      type: "array",
    },
    title: {
      description: desc`
        Can be used to decorate a user interface with a short label about the 
        data produced.
      `,
      type: "string",
    },
    type: {
      description: desc`
        The value of this keyword MUST be either a string or an array. If it is 
        an array, elements of the array MUST be strings and MUST be unique.

        String values MUST be one of the six primitive types (\`\"null\"\`,
        \`\"boolean\"\`, \`\"object\"\`, \`\"array\"\`, \`\"number\"\`, or 
        \`\"string\"\`), or \`\"integer\"\` which matches any number with a zero 
        fractional part.

        An instance validates if and only if the instance is in any of the sets
        listed for this keyword.
      `,
      oneOf: [{
        enum: [
          "array",
          "boolean",
          "integer",
          "null",
          "number",
          "object",
          "string",
        ],
        type: "string",
      }, {
        items: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string",
          ],
          type: "string",
        },
        type: "array",
      }],
    },
    uniqueItems: {
      default: false,
      description: desc`
        The value of this keyword MUST be a boolean.

        If this keyword has boolean value \`false\`, the instance validates
        successfully. If it has boolean value \`true\`, the instance validates
        successfully if all of its elements are unique.

        Omitting this keyword has the same behavior as a value of \`false\`.
      `,
      type: "boolean",
    },
  },
  keywordsByType: {
    array: {
      title: "Array",
      values: [
        "additionalItems",
        "items",
        "maxItems",
        "minItems",
        "uniqueItems",
      ],
    },
    number: {
      title: "Number",
      values: [
        "exclusiveMaximum",
        "maximum",
        "minimum",
        "multipleOf",
      ],
    },
    object: {
      title: "Object",
      values: [
        "additionalProperties",
        "dependencies",
        "maxProperties",
        "minProperties",
        "patternProperties",
        "properties",
        "required",
      ],
    },
    string: {
      title: "String",
      values: [
        "format",
        "maxLength",
        "minLength",
        "pattern",
      ],
    },
  },
});
