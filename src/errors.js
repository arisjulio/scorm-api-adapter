export default {
  "0": {
    "errorString": "No Error",
    "diagnostic": "No error occurred, the previous API call was successful."
  },
  "101": {
    "errorString": "General Exception",
    "diagnostic": "No specific error code exists to describe the error."
  },
  "201": {
    "errorString": "Invalid argument error",
    "diagnostic": "An argument represents an invalid data model element or is otherwise incorrect."
  },
  "202": {
    "errorString": "Element cannot have children",
    "diagnostic": "LMSGetValue was called with a data model element name that ends in “_children” for a data model element that does not support the “_children” suffix."
  },
  "203": {
    "errorString": "Element not an array. Cannot have count",
    "diagnostic": "LMSGetValue was called with a data model element name that ends in “_count” for a data model element that does not support the “_count” suffix."
  },
  "301": {
    "errorString": "Not initialized",
    "diagnostic": "An API call was made before the call to LMSInitialize."
  },
  "401": {
    "errorString": "Not implemented error",
    "diagnostic": "The data model element indicated in a call to LMSGetValue or LMSSetValue is valid, but was not implemented by this LMS. SCORM 1.2 defines a set of data model elements as being optional for an LMS to implement."
  },
  "402": {
    "errorString": "Invalid set value, element is a keyword",
    "diagnostic": "LMSSetValue was called on a data model element that represents a keyword (elements that end in \"_children\" and \"_count\")."
  },
  "403": {
    "errorString": "Element is read only",
    "diagnostic": "LMSSetValue was called with a data model element that can only be read."
  },
  "404": {
    "errorString": "Element is write only",
    "diagnostic": "LMSGetValue was called on a data model element that can only be written to."
  },
  "405": {
    "errorString": "Incorrect Data Type",
    "diagnostic": "LMSSetValue was called with a value that is not consistent with the data format of the supplied data model element."
  },
}