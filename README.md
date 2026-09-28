# Traktamenteskollen

Kontrollverktyg för traktamente enligt **Byggavtalet** eller **Skatteverket**. Visar vad som är skattefritt och vad som blir skattepliktig lön.

- Belopp för 2025 och 2026 (bygg 435/450 kr, skattefritt 300/150/150 kr 2026)
- Förrättningstillägg 35 % dag 1–90, därefter 20 %
- Hemmahelg och mellanliggande lediga dagar (högst två per ledighet)
- Långa förrättningar: 70 % efter tre månader, 50 % efter två år
- Fria måltider, kostförmån och dag-för-dag-uppdelning

En enda statisk fil, `index.html`, utan byggsteg. Deployas direkt på Vercel.

Beloppen uppdateras i `RATES` i `index.html` när nya belopp fastställs.
