import networkx as nx

def is_ismorphic(g1,g2):
    if len(g1) != len(g2):
        return false
    
   for perm in nx.algorithms.isomorphism.faster_could_be_isomorphic(G1,G2):
       if nx.is_isomorphic(g1, g2, node_match=lambda n1, n2: n1['blue'] == n2['blue'], edge_match=lambda e1, e2: e1['weight'] == e2['weight'], node):
           return true
   return false


https://scx2.b-cdn.net/gfx/news/2015/5644a04aaa0fd.png
