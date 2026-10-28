const flowConfig = {
  "id": "0b37c616-436b-4a9f-b18f-41a9ac88e52d",
  "name": "impero_csv_container_issue",
  "edges": [
    {
      "id": "triggerNode_1-codeNode_387",
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
      "target": "codeNode_387",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_387-forLoopNode_476",
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
      "source": "codeNode_387",
      "target": "forLoopNode_476",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_476-plus-node-addNode_469396-110",
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
        ],
        "condition": "Loop Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "forLoopNode_476",
      "target": "conditionNode_887",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_403-responseNode_triggerNode_1-644",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 1530
          },
          {
            "x": 0,
            "y": 1560
          }
        ]
      },
      "type": "defaultEdge",
      "source": "forLoopEndNode_403",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_887-plus-node-addNode_771332",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 490
          },
          {
            "x": 0,
            "y": 505
          },
          {
            "x": -225,
            "y": 505
          },
          {
            "x": -225,
            "y": 520
          }
        ],
        "condition": "Condition 1"
      },
      "type": "conditionEdge",
      "source": "conditionNode_887",
      "target": "flowNode_279",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_887-addNode_864",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 490
          },
          {
            "x": 0,
            "y": 505
          },
          {
            "x": 225,
            "y": 505
          },
          {
            "x": 225,
            "y": 520
          }
        ],
        "condition": "Else"
      },
      "type": "conditionEdge",
      "source": "conditionNode_887",
      "target": "firecrawlNode_598",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "plus-node-addNode_926765-forLoopEndNode_403-381",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 1400
          },
          {
            "x": 0,
            "y": 1430
          }
        ]
      },
      "type": "defaultEdge",
      "source": "plus-node-addNode_926765",
      "target": "forLoopEndNode_403",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "flowNode_279-plus-node-addNode_926765-521",
      "data": {
        "points": [
          {
            "x": -225,
            "y": 620
          },
          {
            "x": -225,
            "y": 1285
          },
          {
            "x": 0,
            "y": 1285
          },
          {
            "x": 0,
            "y": 1300
          }
        ]
      },
      "type": "defaultEdge",
      "source": "flowNode_279",
      "target": "plus-node-addNode_926765",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "firecrawlNode_598-chunkNode_777",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 620
          },
          {
            "x": 225,
            "y": 650
          }
        ]
      },
      "type": "defaultEdge",
      "source": "firecrawlNode_598",
      "target": "chunkNode_777",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_777-codeNode_769",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 750
          },
          {
            "x": 225,
            "y": 780
          }
        ]
      },
      "type": "defaultEdge",
      "source": "chunkNode_777",
      "target": "codeNode_769",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_769-vectorizeNode_647",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 880
          },
          {
            "x": 225,
            "y": 910
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_769",
      "target": "vectorizeNode_647",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_647-codeNode_498",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 1010
          },
          {
            "x": 225,
            "y": 1040
          }
        ]
      },
      "type": "defaultEdge",
      "source": "vectorizeNode_647",
      "target": "codeNode_498",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_498-vectorNode_630",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 1140
          },
          {
            "x": 225,
            "y": 1170
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_498",
      "target": "vectorNode_630",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorNode_630-plus-node-addNode_926765",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 1270
          },
          {
            "x": 225,
            "y": 1285
          },
          {
            "x": 0,
            "y": 1285
          },
          {
            "x": 0,
            "y": 1300
          }
        ]
      },
      "type": "defaultEdge",
      "source": "vectorNode_630",
      "target": "plus-node-addNode_926765",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    },
    {
      "id": "forLoopNode_476-forLoopEndNode_403-604",
      "data": {
        "condition": "Loop"
      },
      "type": "loopEdge",
      "source": "forLoopNode_476",
      "target": "forLoopEndNode_403",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_403-forLoopNode_476-153",
      "data": {
        "condition": "Loop",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "forLoopEndNode_403",
      "target": "forLoopNode_476",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "inactive",
  "created_at": "2026-10-13T12:58:52.110816+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "nodeName": "API Request",
          "responeType": "async",
          "advance_schema": "{\n  \"urls\": \"[string]\"\n}"
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
      "selected": false
    },
    {
      "id": "codeNode_387",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\nlet websites = 0\nlet urls = 0\n\nif ({{ triggerNode_1.output.urls }}.length > 0) {\n  urls={{ triggerNode_1.output.urls }}.length\n}\nconsole.log(websites.toString())\nreturn {\nurls:  urls.toString()\n}",
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
        "y": 130
      },
      "selected": false
    },
    {
      "id": "forLoopEndNode_403",
      "data": {
        "label": "forLoopEndNode node",
        "modes": {},
        "nodeId": "forLoopEndNode",
        "values": {
          "nodeName": "Loop End",
          "connectedTo": "forLoopNode_476"
        }
      },
      "type": "forLoopEndNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 1430
      }
    },
    {
      "id": "forLoopNode_476",
      "data": {
        "label": "forLoopNode node",
        "modes": {},
        "nodeId": "forLoopNode",
        "values": {
          "id": "forLoopNode_476",
          "wait": 0,
          "endValue": "10",
          "nodeName": "Loop",
          "increment": "1",
          "connectedTo": "forLoopEndNode_403",
          "iterateOver": "list",
          "iteratorValue": "{{triggerNode_1.output.urls}}"
        }
      },
      "type": "forLoopNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 260
      },
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"response\": \"{{IndexNode_343.output.message}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 250,
        "height": 89
      },
      "position": {
        "x": -125,
        "y": 1560
      },
      "selected": false
    },
    {
      "id": "conditionNode_887",
      "data": {
        "label": "Condition",
        "modes": {},
        "nodeId": "conditionNode",
        "values": {
          "nodeName": "Condition",
          "conditions": [
            {
              "label": "Condition 1",
              "value": "conditionNode_887-addNode_771",
              "condition": "{\n  \"operator\": null,\n  \"operands\": [\n    {\n      \"name\": \"mime_type\",\n      \"operator\": \"==\",\n      \"value\": \"csv\"\n    }\n  ]\n}"
            },
            {
              "label": "Else",
              "value": "conditionNode_887-addNode_864",
              "condition": {}
            }
          ],
          "allowMultipleConditionExecution": false
        }
      },
      "type": "conditionNode",
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
      "id": "firecrawlNode_598",
      "data": {
        "label": "New",
        "modes": {
          "webhook": "list"
        },
        "nodeId": "firecrawlNode",
        "values": {
          "url": "",
          "mode": "",
          "urls": "",
          "delay": 0,
          "limit": 10,
          "model": "spark-1-mini",
          "mobile": false,
          "prompt": "",
          "search": "",
          "timeout": 30000,
          "waitFor": 2000,
          "webhook": "",
          "nodeName": "Firecrawl",
          "agentUrls": "",
          "agentJobId": "",
          "crawlDepth": 1,
          "crawlLimit": 10,
          "maxCredits": "",
          "agentSchema": "",
          "credentials": "",
          "excludePath": [],
          "excludeTags": [],
          "includePath": [],
          "includeTags": [],
          "sitemapOnly": false,
          "crawlSubPages": false,
          "ignoreSitemap": false,
          "webhookEvents": [
            "completed",
            "failed",
            "page",
            "started"
          ],
          "changeTracking": false,
          "webhookHeaders": "",
          "onlyMainContent": false,
          "webhookMetadata": "",
          "includeSubdomains": false,
          "maxDiscoveryDepth": 1,
          "allowBackwardLinks": false,
          "allowExternalLinks": false,
          "skipTlsVerification": false,
          "ignoreQueryParameters": true,
          "strictConstrainToURLs": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "chunkNode_777",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "chunkNode",
        "values": {
          "nodeName": "Chunking",
          "chunkField": "",
          "numOfChars": "",
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
        "x": 100,
        "y": 650
      },
      "selected": false
    },
    {
      "id": "codeNode_769",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 780
      },
      "selected": false
    },
    {
      "id": "vectorizeNode_647",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "vectorizeNode",
        "values": {
          "nodeName": "Vectorize",
          "inputText": ""
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 910
      },
      "selected": false
    },
    {
      "id": "codeNode_498",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 1040
      },
      "selected": false
    },
    {
      "id": "vectorNode_630",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "vectorNode",
        "values": {
          "limit": "3",
          "action": "index",
          "filters": "",
          "nodeName": "VectorDB",
          "vectorDB": "",
          "primaryKeys": "",
          "vectorsField": "",
          "metadataField": "",
          "duplicateOperation": "overwrite"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 1170
      }
    },
    {
      "id": "flowNode_279",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "flowNode",
        "values": {
          "id": "flowNode_279",
          "flowId": "d3894390-9c2b-497e-b0aa-6eb415fc1f48",
          "nodeName": "Execute Impero csv issue",
          "requestInput": "{\"sampleInput\":\"\"}"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -350,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "plus-node-addNode_926765",
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
        "y": 1300
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