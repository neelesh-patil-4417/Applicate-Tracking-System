const flowConfig = {
  "id": "19798f04-b440-4d0a-8e50-32d2e6e2e727",
  "name": "Arun_impero_csv_container_issue_gdrive",
  "edges": [
    {
      "id": "triggerNode_1-chunkNode_934",
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
      "target": "chunkNode_934",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_934-codeNode_539",
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
      "source": "chunkNode_934",
      "target": "codeNode_539",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_539-vectorizeNode_623",
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
      "source": "codeNode_539",
      "target": "vectorizeNode_623",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_623-codeNode_560",
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
        ]
      },
      "type": "defaultEdge",
      "source": "vectorizeNode_623",
      "target": "codeNode_560",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_560-IndexNode_343",
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
      "source": "codeNode_560",
      "target": "IndexNode_343",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "IndexNode_343-plus-node-addNode_triggerNode_1719",
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
      "source": "IndexNode_343",
      "target": "plus-node-addNode_triggerNode_1719",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-10-14T07:42:39.828004+00:00",
  "trigger_id": 2,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {
          "folderUrl": "list"
        },
        "nodeId": "googleDriveNode",
        "values": {
          "id": "triggerNode_1",
          "globs": [
            "**"
          ],
          "nodeName": "Google Drive",
          "syncMode": "incremental_append",
          "folderUrl": "https://drive.google.com/drive/folders/1kL6oI50JagzdiVwAJoka7ITQ4ZQdyt2d",
          "credentials": "Google Drive OAuth - arun",
          "cronExpression": "0 0 00 ? * 1 * UTC"
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
      },
      "selected": true
    },
    {
      "id": "chunkNode_934",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "chunkNode",
        "schema": {
          "chunks": "string"
        },
        "values": {
          "id": "chunkNode_934",
          "nodeName": "chunking",
          "chunkField": "{{triggerNode_1.output.content}}",
          "numOfChars": 1000,
          "separators": [
            "\\n\\n",
            "\\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": 200
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
      "id": "codeNode_539",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "id": "codeNode_539",
          "code": "let docs =  {{chunkNode_934.output.chunks}};\n\nlet outputDocs = docs.map(doc => doc.pageContent);\n\noutput = outputDocs;",
          "nodeName": "Extract Chunked Text"
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
      "id": "vectorizeNode_623",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "vectorizeNode",
        "schema": {
          "_meta": "object",
          "vectors": "object"
        },
        "values": {
          "id": "vectorizeNode_623",
          "nodeName": "Get Vectors",
          "inputText": "{{codeNode_539.output}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "f3aa467d-855d-4f9b-b0a3-f0055f98c008",
            "provider_name": "openai",
            "credential_name": "open ai test key modelops"
          },
          "generativeModelName": {
            "nodeId": "vectorizeNode",
            "model_name": "claude-sonnet-4-5",
            "credentialId": "5a194ac9-d7e8-4d07-ba64-84caab336393",
            "provider_name": "anthropic",
            "credential_name": "Anthropic LLM"
          }
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 390
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "codeNode_560",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "id": "codeNode_560",
          "code": "let vectors = {{vectorizeNode_623.output.vectors}};\nlet metadataProps = [];\nlet texts = {{codeNode_539.output}};\n\nfor (const idx in vectors) {\n    let metadata = {}\n    metadata[\"content\"] = texts[idx];\n    metadata[\"file_name\"] = {{triggerNode_1.output.document_key}}\n    metadataProps.push(metadata)\n}\nconsole.log(\"finaldata:\", {\"metadata\": metadataProps, \"vectors\": vectors});\noutput = {\"metadata\": metadataProps, \"vectors\": vectors}",
          "nodeName": "Transform Metadata"
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
      "selected": false,
      "draggable": false
    },
    {
      "id": "IndexNode_343",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "IndexNode",
        "schema": {
          "message": "string",
          "recordsIndexed": "string",
          "duplicateRecordsDeleted": "string"
        },
        "values": {
          "id": "IndexNode_343",
          "nodeName": "Index to DB",
          "vectorDB": "impero2",
          "webhookURL": "https://webhook.site/685a66e7-b4d3-40a4-9801-99e3460414f9",
          "primaryKeys": [],
          "vectorsField": "{{codeNode_560.output.vectors}}",
          "metadataField": "{{codeNode_560.output.metadata}}",
          "duplicateOperation": "overwrite",
          "generativeModelName": {
            "nodeId": "IndexNode",
            "model_name": "claude-sonnet-4-5",
            "credentialId": "5a194ac9-d7e8-4d07-ba64-84caab336393",
            "provider_name": "anthropic",
            "credential_name": "Anthropic LLM"
          }
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
      "selected": false,
      "draggable": false
    },
    {
      "id": "plus-node-addNode_triggerNode_1719",
      "data": {
        "label": "+",
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 250,
        "height": 100
      },
      "position": {
        "x": -125,
        "y": 780
      }
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