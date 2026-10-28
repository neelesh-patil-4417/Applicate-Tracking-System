const flowConfig = {
  "id": "26a0d4f1-8600-4edb-8f04-4796b2842363",
  "name": "Maestrox issue",
  "edges": [
    {
      "id": "triggerNode_1-hybridSearchNode_953",
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
      "target": "hybridSearchNode_953",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "hybridSearchNode_953-responseNode_triggerNode_1",
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
      "source": "hybridSearchNode_953",
      "target": "responseNode_triggerNode_1",
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
    }
  ],
  "status": "active",
  "created_at": "2026-10-08T10:31:27.355819+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
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
      },
      "selected": false
    },
    {
      "id": "hybridSearchNode_953",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "hybridSearchNode",
        "values": {
          "id": "hybridSearchNode_953",
          "alpha": "0.25",
          "limit": "3",
          "autocut": "0",
          "filters": "[]",
          "nodeName": "Hybrid Search",
          "vectorDB": "impero1",
          "certainty": "0.85",
          "fusionType": "relativeScoreFusion",
          "searchQuery": "{{triggerNode_1.output.sampleInput}}",
          "boostProperties": false,
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "f3aa467d-855d-4f9b-b0a3-f0055f98c008",
            "provider_name": "openai",
            "credential_name": "open ai test key modelops"
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
        "y": 130
      },
      "selected": true
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
          "outputMapping": "{\n  \"Response\": \"{{hybridSearchNode_953.output.searchResults}}\"\n}"
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
        "y": 260
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