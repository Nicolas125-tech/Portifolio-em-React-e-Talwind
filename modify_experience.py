import re
import sys

try:
    with open("/app/portfolio-nicolas/src/data/personalData.js", "r") as f:
        content = f.read()

    new_content = content.replace(
        'role: "Help Desk",\n    company: "Empresa de TI",\n    period: "2026 - Atualmente"',
        'role: "Estágio em Help Desk",\n    company: "Empresa de TI",\n    period: "2026"'
    )

    new_entry = """,
  {
    id: 3,
    role: "Analista Técnico Computacional",
    company: "Agili Software",
    period: "Maio 2026 - Atual",
    description: "Análise, diagnóstico e resolução de problemas técnicos e lógicos em sistemas de software. Suporte técnico avançado, auxiliando na utilização das soluções tecnológicas da empresa. Elaboração de consultas e manipulação de base de dados (SQL) para análise de cenários e correção de falhas. Interação com a equipe de desenvolvimento para reporte de bugs e melhoria contínua dos sistemas."
  }"""
    pattern = r"(export const experience = \[.*?)(\n\];)"
    new_content = re.sub(pattern, r"\1" + new_entry + r"\2", new_content, flags=re.DOTALL)

    with open("/app/portfolio-nicolas/src/data/personalData.js", "w") as f:
        f.write(new_content)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
