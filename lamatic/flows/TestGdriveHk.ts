const flowConfig = {
  "id": "36d4cd15-8f41-4ce3-9671-29099f0c7413",
  "name": "Test Gdrive Hk",
  "edges": [
    {
      "id": "triggerNode_1-plus-node-addNode_triggerNode_1985",
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
      "target": "plus-node-addNode_triggerNode_1985",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-10-19T09:56:57.770697+00:00",
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
          "folderUrl": "https://drive.google.com/drive/folders/1ZojLl0Vu_IJG6esXlW8tuJ_PkzFjUEYU",
          "credentials": "Google Drive OAuth - hk",
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
      "id": "plus-node-addNode_triggerNode_1985",
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
        "y": 130
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