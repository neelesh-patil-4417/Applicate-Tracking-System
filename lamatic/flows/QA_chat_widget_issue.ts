const flowConfig = {
  "id": "62dcc910-d469-48ae-ad51-e3544b7ff219",
  "name": "QA_chat_widget_issue",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_913",
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
      "target": "LLMNode_913",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_913-responseNode_triggerNode_1",
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
      "source": "LLMNode_913",
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
  "created_at": "2026-10-15T09:10:15.214262+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "chatTriggerNode",
        "values": {
          "chat": "",
          "domains": [
            "*"
          ],
          "nodeName": "Chat Widget",
          "chatConfig": {
            "botName": "Lamatic Bot",
            "imageUrl": "https://img.freepik.com/premium-vector/robot-android-super-hero_111928-7.jpg?w=826",
            "position": "right",
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "displayMode": "popup",
            "placeholder": "Compose your message",
            "suggestions": [
              "What is lamatic?",
              "How do I add data to my chatbot?",
              "Explain this product to me"
            ],
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "hideBranding": false,
            "primaryColor": "#ef4444",
            "headerBgColor": "#000000",
            "greetingMessage": "Hi, I am Lamatic Bot. Ask me anything about Lamatic",
            "headerTextColor": "#FFFFFF",
            "showEmojiButton": true,
            "suggestionBgColor": "#f1f5f9",
            "userMessageBgColor": "#FEF2F2",
            "agentMessageBgColor": "#f1f5f9",
            "suggestionTextColor": "#334155",
            "userMessageTextColor": "#d12323",
            "agentMessageTextColor": "#334155"
          }
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
      "id": "LLMNode_913",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here"
            }
          ],
          "memories": "[]",
          "messages": "{{triggerNode_1.output.chatHistory}}",
          "nodeName": "Generate Text",
          "modelLogic": [],
          "attachments": "",
          "credentials": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "configA",
              "model_name": "gemini-3.5-flash-lite",
              "connectionId": "f324db9b-63ba-4039-8a40-d399065b71a4",
              "credentialId": "e068937e-70cb-493f-8afd-7641c5a88d75",
              "provider_name": "gemini",
              "credential_name": "gemini api key 2"
            }
          ]
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
        "nodeId": "chatResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "content": "{{LLMNode_913.output.generatedResponse}}",
          "nodeName": "Chat Response",
          "references": "",
          "webhookUrl": "",
          "webhookHeaders": ""
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