const treeData = [{
    "jssType": "fieldset",
    "jssSelectLabel": "Fieldset (with legend)",
    "jssSelectGroup": "jssItem",
    "jsName": "fieldset-715",
    "jssLabel": "Legend",
    "jssIcon": "typcn typcn-folder",
    "expanded": true,
    "children": [{
        "jssType": "list-ol",
        "jssSelectLabel": "List - ol",
        "jssSelectGroup": "jssItem",
        "jsName": "list-ol-147",
        "jssLabel": "",
        "jssIcon": "dashicons dashicons-editor-ol",
        "noChildren": false,
        "expanded": true,
        "children": [{
            "jssType": "list-li",
            "jssSelectLabel": "List Item - li",
            "jssSelectGroup": "jssItem",
            "jsName": "list-li-752",
            "jssLabel": "",
            "jssIcon": "dashicons dashicons-editor-ul",
            "noChildren": false,
            "expanded": true,
            "children": [{
                "jssType": "text",
                "jssSelectLabel": "Text (short text)",
                "jssSelectGroup": "jsTag",
                "jsName": "text-422",
                "jssLabel": "Your Name (required)",
                "jsRequired": true,
                "jsTagOptions": [{
                    "jsOption": "",
                    "optionLabel": "Default value",
                    "optionType": "input"
                },
                {
                    "jsOption": "placeholder",
                    "isChecked": false,
                    "optionLabel": "Use this text as the placeholder of the field",
                    "optionType": "checkbox"
                },
                {
                    "jsOption": "akismet_author_email",
                    "isChecked": false,
                    "optionLabel": "Akismet - this field requires author's email address",
                    "optionType": "checkbox"
                }
                ],
                "jsValues": "",
                "jsPlaceholder": false,
                "jsAkismetAuthor": false,
                "jsIdAttribute": "",
                "jsClassAttribute": "",
                "jssIcon": "typcn typcn-sort-alphabetically",
                "noChildren": true
            }]
        },
        {
            "jssType": "list-li",
            "jssSelectLabel": "List Item - li",
            "jssSelectGroup": "jssItem",
            "jsName": "list-li-538",
            "jssLabel": "",
            "jssIcon": "dashicons dashicons-editor-ul",
            "noChildren": false,
            "expanded": true,
            "children": [{
                "jssType": "email",
                "jssSelectLabel": "Email",
                "jssSelectGroup": "jsTag",
                "jsName": "email-842",
                "jssLabel": "Email Address (required)",
                "jsRequired": true,
                "jsTagOptions": [{
                    "jsOption": "",
                    "optionLabel": "Default value",
                    "optionType": "input"
                },
                {
                    "jsOption": "placeholder",
                    "isChecked": false,
                    "optionLabel": "Use this text as the placeholder of the field",
                    "optionType": "checkbox"
                },
                {
                    "jsOption": "akismet_author_email",
                    "isChecked": false,
                    "optionLabel": "Akismet - this field requires author's email address",
                    "optionType": "checkbox"
                }
                ],
                "jsValues": "",
                "jsPlaceholder": false,
                "jsAkismetAuthorEmail": false,
                "jsIdAttribute": "",
                "jsClassAttribute": "",
                "jssIcon": "typcn typcn-mail",
                "noChildren": true
            }]
        },
        {
            "jssType": "list-li",
            "jssSelectLabel": "List Item - li",
            "jssSelectGroup": "jssItem",
            "jsName": "list-li-855",
            "jssLabel": "",
            "jssIcon": "dashicons dashicons-editor-ul",
            "noChildren": false,
            "expanded": true,
            "children": [{
                "jssType": "textarea",
                "jssSelectLabel": "Textarea (long text)",
                "jssSelectGroup": "jsTag",
                "jsName": "textarea-217",
                "jssLabel": "Your Message",
                "jsRequired": false,
                "jsTagOptions": [{
                    "jsOption": "",
                    "optionLabel": "Default value",
                    "optionType": "input"
                },
                {
                    "jsOption": "placeholder",
                    "isChecked": false,
                    "optionLabel": "Use this text as the placeholder of the field",
                    "optionType": "checkbox"
                }
                ],
                "jsValues": "",
                "jsPlaceholder": false,
                "jsIdAttribute": "",
                "jsClassAttribute": "",
                "jssIcon": "typcn typcn-document-text",
                "noChildren": true
            }]
        }
        ]
    },
    {
        "jssType": "paragraph",
        "jssSelectLabel": "Paragraph - p",
        "jssSelectGroup": "jssItem",
        "jsName": "paragraph-993",
        "jssContent": "* Required",
        "jssIcon": "dashicons dashicons-editor-paragraph",
        "noChildren": true
    }
    ]

},
{
    "jssType": "submit",
    "jssSelectLabel": "Submit",
    "jssSelectGroup": "jsTag",
    "jsName": "submit-704",
    "jssLabel": "Send",
    "jsValues": "",
    "jsRequired": false,
    "jsIdAttribute": "",
    "jsClassAttribute": "",
    "jssIcon": "typcn typcn-mail",
    "noChildren": true
},

];




function findObjectByLabel(obj, label) {
    let output = [];
    for (var elements in obj) {
        if (elements === label) {
            //console.log("Hello");
            console.log(typeof(obj[elements]));
            output.push(obj[elements]);
            output.push(1);
            //console.log(obj[elements]);
        }
        if (typeof obj[elements] === 'object') {
            findObjectByLabel(obj[elements], 'jssType');
        }

    }
    //return output;
};

let result = findObjectByLabel(treeData, 'jssType');
console.log(result);

let tmp = [];
tmp.push(1);
tmp.push(2);
console.log(tmp);
