import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt
import io
import base64
import os
from dotenv import load_dotenv
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas

load_dotenv()
 
database_url = os.getenv('MONGO_URL')
print(database_url)

class KG:
    def __init__(self):
        self.getKG()
    def getKG(self):
        # Load healthcare data from a CSV file
        data = pd.read_csv("healthcare_data.csv")

        # Create a directed graph
        G = nx.DiGraph()

        # # Add edges to the graph
        for _, row in data.iterrows():
            G.add_edge(row["subject"], row["object"], label=row["relation"])

        # # Define node positions using the Kamada-Kawai algorithm
        pos = nx.kamada_kawai_layout(G)
        

        # get base64 of plot
        fig = plt.figure()
        canvas = FigureCanvas(fig)
        ax = fig.gca()
        nx.draw_networkx_nodes(G, pos, node_size=500, alpha=0.8)
        nx.draw_networkx_edges(G, pos, width=1.0, alpha=0.5)
        nx.draw_networkx_labels(G, pos, font_size=10, font_family="sans-serif")
        nx.draw_networkx_edge_labels(G, pos, font_size=8, font_family="sans-serif")
        plt.axis("off")
        canvas.draw()
        buf = io.BytesIO()
        fig.savefig(buf, format="png")
        buf.seek(0)
        string = base64.b64encode(buf.read())

        print(string)

        # connect mongodb and insert the base64 string into the database
        from pymongo import MongoClient

        client = MongoClient(database_url)
        db = client["test"]
        collection = db["kg"]
        collection.insert_one({"image": string, "userId": "63701cc1f03239d40b000043"})