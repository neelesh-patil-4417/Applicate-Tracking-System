const flowConfig = {
  "id": "cae97ff5-dbd7-4a6f-ad85-1916e0567199",
  "name": "Tender Photographer",
  "edges": [],
  "status": "active",
  "created_at": "2026-10-22T10:11:17.805315+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
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