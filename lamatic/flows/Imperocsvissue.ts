const flowConfig = {
  "id": "d3894390-9c2b-497e-b0aa-6eb415fc1f48",
  "name": "Impero csv issue",
  "edges": [
    {
      "id": "triggerNode_1-extractFromFileNode_100",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 100
          },
          {
            "x": 0,
            "y": 130
          }
        ]
      },
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "extractFromFileNode_100",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "extractFromFileNode_100-codeNode_332",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 230
          },
          {
            "x": 0,
            "y": 260
          }
        ]
      },
      "type": "defaultEdge",
      "source": "extractFromFileNode_100",
      "target": "codeNode_332",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_332-batchNode_361",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 360
          },
          {
            "x": 0,
            "y": 390
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_332",
      "target": "batchNode_361",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_361-codeNode_435",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 1010
          },
          {
            "x": 0,
            "y": 1040
          }
        ]
      },
      "type": "defaultEdge",
      "source": "batchEndNode_361",
      "target": "codeNode_435",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_435-vectorNode_199",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 1140
          },
          {
            "x": 0,
            "y": 1170
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_435",
      "target": "vectorNode_199",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorNode_199-responseNode_triggerNode_1",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 1270
          },
          {
            "x": 0,
            "y": 1300
          }
        ]
      },
      "type": "defaultEdge",
      "source": "vectorNode_199",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_171-codeNode_342",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 620
          },
          {
            "x": 0,
            "y": 650
          }
        ]
      },
      "type": "defaultEdge",
      "source": "chunkNode_171",
      "target": "codeNode_342",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_342-vectorizeNode_124",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 750
          },
          {
            "x": 0,
            "y": 780
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_342",
      "target": "vectorizeNode_124",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_124-batchEndNode_361",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 880
          },
          {
            "x": 0,
            "y": 910
          }
        ]
      },
      "type": "defaultEdge",
      "source": "vectorizeNode_124",
      "target": "batchEndNode_361",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchNode_361-codeNode_832-683",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 490
          },
          {
            "x": 0,
            "y": 520
          }
        ],
        "condition": "Batch Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "batchNode_361",
      "target": "chunkNode_171",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-responseNode_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    },
    {
      "id": "batchNode_361-batchEndNode_361-756",
      "data": {
        "condition": "Batch"
      },
      "type": "loopEdge",
      "source": "batchNode_361",
      "target": "batchEndNode_361",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_361-batchNode_361-874",
      "data": {
        "condition": "Batch",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "batchEndNode_361",
      "target": "batchNode_361",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-10-05T21:18:39.420473+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "schema": {
          "sampleOutput": "string"
        },
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\"sampleInput\":\"string\"}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 0
      }
    },
    {
      "id": "extractFromFileNode_100",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "extractFromFileNode",
        "schema": {
          "files": "object"
        },
        "values": {
          "id": "extractFromFileNode_100",
          "trim": false,
          "ltrim": false,
          "quote": "\"",
          "rtrim": false,
          "format": "csv",
          "comment": "null",
          "fileUrl": "{{triggerNode_1.output.sampleInput}}",
          "headers": true,
          "maxRows": "0",
          "encoding": "utf8",
          "nodeName": "Extract from File",
          "password": "",
          "skipRows": "0",
          "delimiter": ",",
          "joinPages": false,
          "ignoreEmpty": false,
          "returnRawText": false,
          "encodeAsBase64": false,
          "discardUnmappedColumns": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 130
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "codeNode_332",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\nlet extraction_result_of_one_file = {{extractFromFileNode_100.output.files}}[0]\n\n\nlet file_metadata = extraction_result_of_one_file.metadata;\nlet rows = extraction_result_of_one_file.data;\n\nconst documents = [];\nconst texts = [];\n\nfor (const row of rows) {\n\n    const text = Object.entries(row)\n        .map(([key, value]) => `${key}: ${value}`)\n        .join(\" \");\n\n\n    texts.push(text);\n\n    const metadata = {\n        source: file_metadata.filename,\n        index: row[\"Index\"],\n        internal_id: row[\"Internal ID\"],\n        name: row[\"Name\"],\n        brand: row[\"Brand\"],\n        category: row[\"Category\"],\n        price: Number(row[\"Price\"]),\n        currency: row[\"Currency\"],\n        stock: Number(row[\"Stock\"]),\n        ean: row[\"EAN\"],\n        color: row[\"Color\"],\n        size: row[\"Size\"],\n        availability: row[\"Availability\"]\n    };\n\n    documents.push({\n        text,\n        metadata\n    });\n}\n\n\noutput = texts",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 260
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "batchNode_361",
      "data": {
        "label": "batchNode node",
        "modes": {},
        "nodeId": "batchNode",
        "values": {
          "id": "batchNode_361",
          "endValue": 10,
          "nodeName": "Batch",
          "increment": 1,
          "connectedTo": "batchEndNode_361",
          "iterateOver": "list",
          "initialValue": 0,
          "iteratorValue": "{{codeNode_332.output}}",
          "concurrencyLimit": 10
        }
      },
      "type": "batchNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 390
      },
      "selected": false
    },
    {
      "id": "chunkNode_171",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "chunkNode",
        "values": {
          "id": "chunkNode_171",
          "nodeName": "Chunking",
          "chunkField": "{{batchNode_361.output.currentValue}}",
          "numOfChars": 1000,
          "separators": [
            "\n\n",
            "\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": "0"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "codeNode_342",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "schema": {
          "0": "string"
        },
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\n\nlet docs =  {{chunkNode_171.output.chunks}}\n\nlet outputDocs = docs.map(doc => doc.pageContent);\n\noutput = outputDocs;",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 650
      },
      "selected": false
    },
    {
      "id": "vectorizeNode_124",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "vectorizeNode",
        "values": {
          "id": "vectorizeNode_124",
          "nodeName": "Vectorize",
          "inputText": "{{codeNode_342.output}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "f3aa467d-855d-4f9b-b0a3-f0055f98c008",
            "provider_name": "openai",
            "credential_name": "open ai test key modelops"
          }
        },
        "disabled": false
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 780
      },
      "selected": false
    },
    {
      "id": "batchEndNode_361",
      "data": {
        "label": "batchEndNode node",
        "modes": {},
        "nodeId": "batchEndNode",
        "values": {
          "nodeName": "Batch End",
          "connectedTo": "batchNode_361"
        }
      },
      "type": "batchEndNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 910
      },
      "selected": false
    },
    {
      "id": "codeNode_435",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "schema": {
          "keys": "array",
          "count": "number",
          "skipped": "array",
          "vectors": "array",
          "metadata": "array",
          "warnings": "array",
          "dimension": "number"
        },
        "values": {
          "code": "// Collected output of your batch node.\n// Replace batchNode_XXX with your batch node's real ID.\n\n// Collected output of the batch node\nconst batchResults = {{batchEndNode_361.output.batchOutput}}\n\n\n// ===== CONFIG =====\nconst ID_FIELDS = [\"ean\", \"index\"];   // unique product key; the first one found is used (Internal ID is NOT unique)\nconst KNOWN_KEYS = [];                // optional, e.g. [\"Name\",\"Brand\",\"Internal ID\"]; empty = auto-detect\nconst KEY_MIN_SHARE = 0.8;            // auto-detect: a \"Key:\" must appear in 80%+ of rows\n\n// ===== 1. Collect each batch's chunk texts and vectors =====\nconst rows = [], skipped = [];\n(Array.isArray(batchResults) ? batchResults : []).forEach((batch, b) => {\n  if (!batch || typeof batch !== \"object\") return;\n  const vec = batch.vectorizeNode_124;\n  const vs = vec?.output?.vectors;\n  if (!vec || (vec.status && vec.status !== \"success\") || !Array.isArray(vs) || !vs.length) {\n    skipped.push({ batch: b, reason: \"no vectors / vectorize failed\" });\n    return;\n  }\n  // Use real OUTPUTS, not \"input\" fields (those are unfilled templates)\n  let texts = batch.codeNode_342?.output;\n  if (!Array.isArray(texts)) texts = (batch.chunkNode_171?.output?.chunks || []).map(c => c.pageContent);\n  if (texts.length !== vs.length) {\n    skipped.push({ batch: b, reason: `texts (${texts.length}) != vectors (${vs.length})` });\n    return;\n  }\n  // Rebuild the full row: the chunker split on spaces with 0 overlap, so join with \" \"\n  rows.push({ b, vs, texts, fullRow: texts.join(\" \") });\n});\n\n// ===== 2. Find column names automatically (works for any columns) =====\n// A real column name like \"Category:\" appears in almost every row;\n// text inside a description like \"Note:\" doesn't, so it's ignored.\nfunction detectKeys(fullRows) {\n  const counts = new Map();\n  const re = /(?:^|\\s)((?:[A-Z][\\w&'-]*\\s){0,3}[A-Z][\\w&'-]*):\\s/g;\n  for (const row of fullRows) {\n    const seen = new Set();\n    for (const m of row.matchAll(re)) {\n      const words = m[1].split(/\\s+/);\n      for (let i = 0; i < words.length; i++) seen.add(words.slice(i).join(\" \")); // \"Flynn Category\" -> also \"Category\"\n    }\n    seen.forEach(k => counts.set(k, (counts.get(k) || 0) + 1));\n  }\n  const min = Math.max(2, Math.ceil(fullRows.length * KEY_MIN_SHARE));\n  return [...counts].filter(([, n]) => n >= min).map(([k]) => k);\n}\nconst keys = KNOWN_KEYS.length ? KNOWN_KEYS : detectKeys(rows.map(r => r.fullRow));\nconst esc = s => s.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\FLOW_CONFIG\");\nconst keyRe = new RegExp(`(?:^|\\\\s)(${[...keys].sort((a, b) => b.length - a.length).map(esc).join(\"|\")}):\\\\s`, \"g\");\n\nconst toKey = k => k.trim().toLowerCase().replace(/[^a-z0-9]+/g, \"_\").replace(/^_|_$/g, \"\");\nconst toValue = v => /^-?(0|[1-9]\\d{0,9})(\\.\\d+)?$/.test(v) ? Number(v) : v;  // EAN stays text\n\nfunction parseRecord(text) {\n  const meta = {};\n  const marks = keys.length ? [...text.matchAll(keyRe)] : [];\n  marks.forEach((m, i) => {\n    const start = m.index + m[0].length;\n    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;\n    meta[toKey(m[1])] = toValue(text.slice(start, end).trim());\n  });\n  return meta;\n}\n// ===== 3. Build vectors and metadata =====\n// Fields sent as real Weaviate properties. EVERY name here must exist in the collection.\n// Columns not listed are bundled into one JSON text field, so new columns never break the insert.\nconst ALLOWED_FIELDS = [\"content\", \"chunk_id\", \"product\"];   // add e.g. \"price\",\"category\" only if they're in the schema\nconst PRODUCT_JSON_FIELD = \"product\";                        // set to null to drop extra columns instead\n\nconst vectors = [], metadata = [], warnings = [];\nconst usedIds = new Set();\nlet dim = null;\n\nrows.forEach(({ b, vs, texts, fullRow }) => {\n  const rowMeta = parseRecord(fullRow);\n  const idField = ID_FIELDS.find(f => rowMeta[f] !== undefined && rowMeta[f] !== \"\");\n  let rowId = idField ? String(rowMeta[idField]) : `batch${b}`;\n  if (usedIds.has(rowId)) {                      // never let two products share an ID\n    warnings.push({ batch: b, reason: `duplicate id \"${rowId}\", using \"${rowId}-b${b}\"` });\n    rowId = `${rowId}-b${b}`;\n  }\n  usedIds.add(rowId);\n\n  vs.forEach((v, i) => {\n    if (!Array.isArray(v) || !v.length) { skipped.push({ batch: b, chunk: i, reason: \"empty vector\" }); return; }\n    dim ??= v.length;\n    if (v.length !== dim) { skipped.push({ batch: b, chunk: i, reason: `dim ${v.length} != ${dim}` }); return; }\n\n    const full = {\n      ...rowMeta,\n      content: texts[i],              // this chunk's own text\n      chunk_index: i,\n      total_chunks: vs.length,\n      chunk_id: `${rowId}_${i}`,      // unique per chunk (\"id\" is reserved in Weaviate)\n    };\n    if (PRODUCT_JSON_FIELD) full[PRODUCT_JSON_FIELD] = JSON.stringify(rowMeta);\n\n    // Send only fields that exist in the schema\n    const meta = {};\n    for (const f of ALLOWED_FIELDS) if (full[f] !== undefined) meta[f] = full[f];\n\n    vectors.push(v);\n    metadata.push(meta);\n  });\n});\n\noutput = { vectors, metadata, count: vectors.length, dimension: dim, keys, skipped, warnings };",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 1040
      },
      "selected": false
    },
    {
      "id": "vectorNode_199",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "vectorNode",
        "values": {
          "id": "vectorNode_199",
          "limit": "3",
          "action": "index",
          "filters": "",
          "nodeName": "VectorDB",
          "vectorDB": "impero1",
          "primaryKeys": [
            "chunk_id"
          ],
          "vectorsField": "{{codeNode_435.output.vectors}}",
          "metadataField": "{{codeNode_435.output.metadata}}",
          "duplicateOperation": "overwrite"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 1170
      },
      "selected": true
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlResponseNode",
        "schema": {},
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"message\": \"{{vectorNode_199.output.message}}\",\n  \"recordsIndexed\": \"{{vectorNode_199.output.recordsIndexed}}\"\n}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 250,
        "height": 89
      },
      "position": {
        "x": -125,
        "y": 1300
      },
      "selected": false
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}