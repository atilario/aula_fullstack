from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os

app = FastAPI(
    title="Build Up - API de Inteligência Imobiliária",
    description="API para disponibilização de dados tratados e predições do mercado imobiliário."
)

# Configuração de CORS: ESSENCIAL para permitir que o seu HTML isolado acesse a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, substitua pelo domínio do frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CSV_PATH = "dados_scraped.csv"


def carregar_dados():
    # Verifica se o arquivo do seu scraper existe
    if os.path.exists(CSV_PATH):
        df = pd.read_csv(CSV_PATH)
    else:
        # Dados simulados (Mock) baseados na região caso o scraper não tenha rodado
        dados_mock = [
            {"bairro": "Pituba", "preco": 450000, "area": 70,
                "tempo_venda_dias": 45, "lat": -12.9995, "lng": -38.4608},
            {"bairro": "Imbuí", "preco": 320000, "area": 60,
                "tempo_venda_dias": 60, "lat": -12.9734, "lng": -38.4212},
            {"bairro": "Caminho das Árvores", "preco": 850000, "area": 110,
                "tempo_venda_dias": 35, "lat": -12.9812, "lng": -38.4550},
            {"bairro": "Horto Florestal", "preco": 1350000, "area": 150,
                "tempo_venda_dias": 85, "lat": -12.9885, "lng": -38.4695},
            {"bairro": "Graça", "preco": 920000, "area": 120,
                "tempo_venda_dias": 50, "lat": -13.0041, "lng": -38.5244}
        ]
        df = pd.DataFrame(dados_mock)

    # Tratamento básico de dados e cálculo do preço por m² utilizando Pandas
    if "preco_m2" not in df.columns:
        df["preco_m2"] = df["preco"] / df["area"]
    return df


@app.get("/api/indicadores")
def obter_indicadores():
    """Retorna os indicadores estratégicos consolidados para os cards do painel"""
    df = carregar_dados()

    media_m2 = float(df["preco_m2"].mean())
    media_tempo_venda = float(df["tempo_venda_dias"].mean())
    total_ofertas = int(len(df))
    roi_medio_estimado = 14.8  # Simulação do motor de IA/viabilidade da Build Up

    return {
        "preco_medio_m2": round(media_m2, 2),
        "tempo_medio_venda_dias": round(media_tempo_venda, 1),
        "roi_medio_porcento": roi_medio_estimado,
        "total_imoveis_analisados": total_ofertas
    }


@app.get("/api/mapa")
def obter_dados_mapa():
    """Retorna a lista completa de imóveis com geolocalização para o mapa de tendências"""
    df = carregar_dados()
    return df.to_dict(orient="records")


if __name__ == "__main__":
    import uvicorn
    # A string tem que ser exatamente o nome do seu arquivo (sem o .py)
    uvicorn.run("BUILDUPTESTES:app", host="127.0.0.1", port=8000, reload=True)
