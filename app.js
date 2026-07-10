// Disney Summer 2026 Transit Routes Data (Aller & Retour)
const routesData = {
    "aller": {
        "07h45": {
            "1": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "06h30", class: "pill-time" },
                        { label: "🚶‍♂️ 4m" },
                        { type: "M", line: "5", colorClass: "m5", label: "+ M1 G. Lyon" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "07h39", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h30", title: "Départ Domicile", desc: "Quittez le 1B Rue Jacques Kablé et marchez vers la station de métro Stalingrad (4 min)." },
                        { time: "06h34", title: "Métro 5", desc: "Montez dans la ligne 5 en direction de Place d'Italie. Descendez à la station Bastille.", arrTime: "06h46" },
                        { time: "06h46", title: "Correspondance Bastille", desc: "Marche de 3 min dans les couloirs. Attente de la ligne 1 : ~3 min.", isTransfer: true },
                        { time: "06h49", title: "Métro 1", desc: "Montez dans la ligne 1 en direction de Château de Vincennes. Descendez à Gare de Lyon.", arrTime: "06h51" },
                        { time: "06h51", title: "Correspondance Gare de Lyon", desc: "Rejoignez les quais du RER A (Marche : 2 min). Attente du RER A : ~10 min (sécurité).", isTransfer: true },
                        { time: "07h01", title: "RER A", desc: "Montez dans le RER A en direction de Marne-la-Vallée Chessy.", arrTime: "07h39" },
                        { time: "07h39", title: "Arrivée", desc: "Marne-la-Vallée Chessy (Disneyland Paris). Vous arrivez 6 minutes avant l'objectif de 07h45." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "06h25", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "V. Fontenay" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "07h20", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h25", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (environ 8 min)." },
                        { time: "06h33", title: "Gare de Magenta", desc: "Accès aux quais du RER E. Attente : ~3 min." },
                        { time: "06h36", title: "RER E", desc: "Prenez le RER E en direction de Tournan. Descendez à Val de Fontenay.", arrTime: "06h51" },
                        { time: "06h51", title: "Correspondance Val de Fontenay", desc: "Changement de quai pour le RER A (Marche : 2 min). Attente : ~4 min.", isTransfer: true },
                        { time: "06h55", title: "RER A", desc: "Prenez le RER A en direction de Marne-la-Vallée Chessy.", arrTime: "07h20" },
                        { time: "07h20", title: "Arrivée", desc: "Gare de Marne-la-Vallée Chessy. Itinéraire de secours idéal si la ligne 5 ou la ligne 1 est perturbée." }
                    ]
                }
            ],
            "2": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "06h26", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "M", line: "7", colorClass: "m7", label: "Châtelet" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "07h36", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h26", title: "Départ Domicile", desc: "Marchez vers Stalingrad (accès quais profonds Ligne 7 - 8 min)." },
                        { time: "06h34", title: "Métro 7", desc: "Montez dans la ligne 7 en direction de Villejuif/Mairie d'Ivry. Descendez à Châtelet.", arrTime: "06h46" },
                        { time: "06h46", title: "Correspondance Châtelet", desc: "Suivez le long couloir de correspondance vers le RER A (Marche : 5 min). Attente : ~8 min.", isTransfer: true },
                        { time: "06h54", title: "RER A", desc: "Prenez le RER A en direction de Marne-la-Vallée Chessy (départ 06h54 ou 06h58).", arrTime: "07h36" },
                        { time: "07h36", title: "Arrivée", desc: "Gare de Marne-la-Vallée Chessy (arr. 07h36 ou 07h40). Itinéraire direct évitant la ligne 5 saturée par la coupure RER B/D." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "06h25", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "V. Fontenay" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "07h20", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h25", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (8 min)." },
                        { time: "06h33", title: "Magenta / RER E", desc: "Attente du RER E : ~3 min." },
                        { time: "06h36", title: "RER E", desc: "Prenez le RER E en direction de Tournan. Descendez à Val de Fontenay.", arrTime: "06h51" },
                        { time: "06h51", title: "Correspondance Val de Fontenay", desc: "Changement de quai (Marche : 2 min). Attente : ~4 min.", isTransfer: true },
                        { time: "06h55", title: "RER A", desc: "Prenez le RER A direction Chessy.", arrTime: "07h20" }
                    ]
                }
            ],
            "3": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "06h19", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "TRAIN", line: "P", colorClass: "trainp", label: "Esbly" },
                        { type: "BUS", line: "2261", colorClass: "bus", label: "Chessy" },
                        { label: "07h22", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h19", title: "Départ Domicile", desc: "Marchez vers Paris Gare de l'Est (environ 8 min)." },
                        { time: "07h27", title: "Gare de l'Est / Ligne P", desc: "Attente en gare : ~4 min." },
                        { time: "06h31", title: "Transilien Ligne P", desc: "Prenez le train de la Ligne P direction Meaux. Descendez à Esbly.", arrTime: "07h01" },
                        { time: "07h01", title: "Correspondance Esbly", desc: "Quittez la gare pour rejoindre le parvis routier (Marche : 2 min). Attente bus : 3 min.", isTransfer: true },
                        { time: "07h04", title: "Bus 2261 ou 2262", desc: "Montez à bord du bus direct pour Chessy Gare.", arrTime: "07h22" },
                        { time: "07h22", title: "Arrivée", desc: "Marne-la-Vallée Chessy. Itinéraire optimal contournant totalement le tronçon fermé du RER A (Vincennes ↔ Noisy)." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "05h55", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Tournan" },
                        { type: "BUS", line: "2292", colorClass: "bus", label: "Val d'Europe" },
                        { label: "07h17", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "05h55", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (8 min)." },
                        { time: "06h03", title: "Gare de Magenta / RER E", desc: "Attente sur le quai : ~6 min." },
                        { time: "06h09", title: "RER E", desc: "Prenez le RER E en direction de Tournan. Descendez à Tournan.", arrTime: "06h37" },
                        { time: "06h37", title: "Correspondance Tournan", desc: "Sortie de gare vers la gare routière (Marche : 2 min). Attente : 3 min.", isTransfer: true },
                        { time: "06h42", title: "Bus 2292", desc: "Prenez le bus 2292 en direction de Val d'Europe.", arrTime: "07h07" },
                        { time: "07h07", title: "Arrivée Val d'Europe", desc: "Marche de 10 min ou liaison RER A (1 arrêt) pour atteindre Chessy vers 07h17." }
                    ]
                }
            ]
        },
        "08h30": {
            "1": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "07h15", class: "pill-time" },
                        { label: "🚶‍♂️ 4m" },
                        { type: "M", line: "5", colorClass: "m5", label: "+ M1 G. Lyon" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "08h19", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "07h15", title: "Départ Domicile", desc: "Quittez le domicile et marchez vers la station Stalingrad (4 min)." },
                        { time: "07h19", title: "Métro 5", desc: "Prenez la ligne 5 en direction de Place d'Italie. Descendez à Bastille.", arrTime: "07h31" },
                        { time: "07h31", title: "Correspondance Bastille", desc: "Marche de 3 min dans les couloirs. Attente Ligne 1 : 3 min.", isTransfer: true },
                        { time: "07h34", title: "Métro 1", desc: "Prenez la ligne 1 direction Château de Vincennes. Descendez à Gare de Lyon.", arrTime: "07h36" },
                        { time: "07h36", title: "Correspondance Gare de Lyon", desc: "Rejoignez les quais RER A (Marche : 2 min). Attente du RER A : ~5 min.", isTransfer: true },
                        { time: "07h41", title: "RER A", desc: "Montez dans le RER A en direction de Marne-la-Vallée Chessy (départ 07h41 ou 07h47).", arrTime: "08h19" },
                        { time: "08h19", title: "Arrivée", desc: "Marne-la-Vallée Chessy (arr. 08h19 ou 08h25). Parfait pour votre objectif de 08h30-08h35." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "07h10", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "V. Fontenay" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "08h05", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "07h10", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (8 min)." },
                        { time: "07h18", title: "Gare de Magenta / RER E", desc: "Attente : ~3 min." },
                        { time: "07h21", title: "RER E", desc: "Prenez le RER E en direction de Tournan. Descendez à Val de Fontenay.", arrTime: "07h36" },
                        { time: "07h36", title: "Correspondance Val de Fontenay", desc: "Changement de quai (Marche : 2 min). Attente : 4 min.", isTransfer: true },
                        { time: "07h40", title: "RER A", desc: "Prenez le RER A en direction de Chessy.", arrTime: "08h05" }
                    ]
                }
            ],
            "2": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "07h09", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "M", line: "7", colorClass: "m7", label: "Châtelet" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "08h19", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "07h09", title: "Départ Domicile", desc: "Marchez vers Stalingrad (accès ligne 7 - 8 min)." },
                        { time: "07h17", title: "Métro 7", desc: "Prenez la ligne 7 direction Villejuif/Mairie d'Ivry. Descendez à Châtelet.", arrTime: "07h29" },
                        { time: "07h29", title: "Correspondance Châtelet", desc: "Suivez le couloir de correspondance vers le RER A (Marche : 5 min). Attente : ~8 min.", isTransfer: true },
                        { time: "07h37", title: "RER A", desc: "Prenez le RER A direction Chessy (départ 07h37 ou 07h43).", arrTime: "08h19" },
                        { time: "08h19", title: "Arrivée", desc: "Marne-la-Vallée Chessy (arr. 08h19 ou 08h25)." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "07h10", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "V. Fontenay" },
                        { type: "RER", line: "A", colorClass: "rera", label: "MLV" },
                        { label: "08h05", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "07h10", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (8 min)." },
                        { time: "07h18", title: "Magenta / RER E", desc: "Attente : ~3 min." },
                        { time: "07h21", title: "RER E", desc: "Prenez le RER E direction Tournan. Descendez à Val de Fontenay.", arrTime: "07h36" },
                        { time: "07h36", title: "Correspondance Val de Fontenay", desc: "Changement de quai (Marche : 2 min). Attente : 4 min.", isTransfer: true },
                        { time: "07h40", title: "RER A", desc: "Prenez le RER A direction Chessy.", arrTime: "08h05" }
                    ]
                }
            ],
            "3": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "07h19", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "TRAIN", line: "P", colorClass: "trainp", label: "Esbly" },
                        { type: "BUS", line: "2261", colorClass: "bus", label: "Chessy" },
                        { label: "08h22", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "07h19", title: "Départ Domicile", desc: "Marchez vers Paris Gare de l'Est (8 min)." },
                        { time: "07h27", title: "Gare de l'Est / Ligne P", desc: "Attente en gare : ~4 min." },
                        { time: "07h31", title: "Transilien Ligne P", desc: "Prenez le train de la Ligne P direction Meaux. Descendez à Esbly.", arrTime: "08h01" },
                        { time: "08h01", title: "Correspondance Esbly", desc: "Quittez la gare pour le parvis routier (Marche : 2 min). Attente bus : 3 min.", isTransfer: true },
                        { time: "08h04", title: "Bus 2261 ou 2262", desc: "Prenez le bus direct pour Chessy Gare.", arrTime: "08h22" },
                        { time: "08h22", title: "Arrivée", desc: "Marne-la-Vallée Chessy (arr. 08h22 ou 08h28)." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "06h55", class: "pill-time" },
                        { label: "🚶‍♂️ 8m" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Tournan" },
                        { type: "BUS", line: "2292", colorClass: "bus", label: "Val d'Europe" },
                        { label: "08h17", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "06h55", title: "Départ Domicile", desc: "Marchez vers la gare de Magenta (8 min)." },
                        { time: "07h03", title: "Magenta / RER E", desc: "Attente : ~6 min." },
                        { time: "07h09", title: "RER E", desc: "Prenez le RER E en direction de Tournan. Descendez à Tournan.", arrTime: "07h37" },
                        { time: "07h37", title: "Correspondance Tournan", desc: "Rejoignez la gare routière (Marche : 2 min). Attente : 5 min.", isTransfer: true },
                        { time: "07h42", title: "Bus 2292", desc: "Prenez le bus 2292 en direction de Val d'Europe.", arrTime: "08h07" },
                        { time: "08h07", title: "Arrivée Val d'Europe", desc: "Marche ou RER A (1 arrêt) pour atteindre Chessy vers 08h17." }
                    ]
                }
            ]
        }
    },
    "retour": {
        "17h30": {
            "1": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "G. Lyon" },
                        { type: "M", line: "1", colorClass: "m1", label: "+ M5 Bastille" },
                        { label: "🚶‍♂️ 4m" },
                        { label: "18h36", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Gare Chessy", desc: "Montez dans le RER A en direction de Paris." },
                        { time: "18h08", title: "Arrivée Gare de Lyon", desc: "Descendez à Gare de Lyon. Suivez la correspondance pour le Métro 1 (Marche : 2 min). Attente Ligne 1 : ~2 min.", isTransfer: true },
                        { time: "18h12", title: "Métro 1", desc: "Prenez la ligne 1 direction La Défense. Descendez à Bastille.", arrTime: "18h14" },
                        { time: "18h14", title: "Correspondance Bastille", desc: "Rejoignez les quais de la ligne 5 direction Bobigny (Marche : 3 min). Attente Ligne 5 : ~3 min.", isTransfer: true },
                        { time: "18h20", title: "Métro 5", desc: "Prenez la ligne 5. Descendez à Stalingrad.", arrTime: "18h32" },
                        { time: "18h32", title: "Arrivée Stalingrad", desc: "Sortez à Stalingrad et marchez 4 min pour atteindre le 1B Rue Jacques Kablé à 18h36." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours (Plus rapide !)",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Fontenay" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "18h24", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Gare Chessy", desc: "Montez dans le RER A direction Paris. Descendez à Val de Fontenay.", arrTime: "17h55" },
                        { time: "17h55", title: "Correspondance Val de Fontenay", desc: "Changement de quai vers le RER E direction Haussmann Saint-Lazare (Marche : 2 min). Attente : ~4 min.", isTransfer: true },
                        { time: "18h01", title: "RER E", desc: "Prenez le RER E. Descendez à Magenta.", arrTime: "18h16" },
                        { time: "18h16", title: "Arrivée Magenta", desc: "Sortez de la gare et marchez 8 min vers votre domicile. Arrivée à 18h24. Une liaison directe très efficace !" }
                    ]
                }
            ],
            "2": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Châtelet" },
                        { type: "M", line: "7", colorClass: "m7", label: "Stalingrad" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "18h40", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Gare Chessy", desc: "Montez dans le RER A direction Paris. Descendez à Châtelet-Les Halles.", arrTime: "18h12" },
                        { time: "18h12", title: "Correspondance Châtelet", desc: "Suivez le long couloir de correspondance vers le Métro 7 direction La Courneuve (Marche : 5 min). Attente Ligne 7 : ~3 min.", isTransfer: true },
                        { time: "18h20", title: "Métro 7", desc: "Prenez le métro 7. Descendez à Stalingrad.", arrTime: "18h32" },
                        { time: "18h32", title: "Arrivée Stalingrad L7", desc: "Remontez des quais profonds de la ligne 7 (Marche : 8 min) pour atteindre le domicile à 18h40." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours (Conseillé !)",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Fontenay" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "18h24", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Gare Chessy", desc: "Montez dans le RER A direction Paris. Descendez à Val de Fontenay.", arrTime: "17h55" },
                        { time: "17h55", title: "Correspondance Val de Fontenay", desc: "Rejoignez le RER E (Marche : 2 min). Attente : ~4 min.", isTransfer: true },
                        { time: "18h01", title: "RER E", desc: "Montez dans le RER E. Descendez à Magenta.", arrTime: "18h16" },
                        { time: "18h16", title: "Arrivée Magenta", desc: "Marche à pied de 8 min pour atteindre le domicile à 18h24." }
                    ]
                }
            ],
            "3": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "BUS", line: "2261", colorClass: "bus", label: "Esbly" },
                        { type: "TRAIN", line: "P", colorClass: "trainp", label: "Paris Est" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "18h39", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Gare Chessy", desc: "Prenez le bus 2261 ou 2262 en direction d'Esbly Gare." },
                        { time: "17h48", title: "Arrivée Esbly", desc: "Correspondance pour le Transilien Ligne P (Marche : 2 min). Attente du train : 11 min.", isTransfer: true },
                        { time: "18h01", title: "Ligne P", desc: "Prenez le train de la Ligne P direction Paris-Est.", arrTime: "18h31" },
                        { time: "18h31", title: "Arrivée Paris Gare de l'Est", desc: "Sortez de la gare et marchez 8 min pour rejoindre le domicile à 18h39." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "17h30", class: "pill-time" },
                        { type: "BUS", line: "2292", colorClass: "bus", label: "Tournan" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "18h45", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "17h30", title: "Départ Chessy / Val d'Europe", desc: "Prenez le bus 2292 en direction de Tournan Gare." },
                        { time: "17h55", title: "Arrivée Gare de Tournan", desc: "Rejoignez la gare RER E (Marche : 2 min). Attente RER E : 12 min.", isTransfer: true },
                        { time: "18h09", title: "RER E", desc: "Prenez le RER E direction Haussmann Saint-Lazare.", arrTime: "18h37" },
                        { time: "18h37", title: "Arrivée Magenta", desc: "Sortez à Magenta et marchez 8 min vers votre domicile (arr. 18h45)." }
                    ]
                }
            ]
        },
        "18h20": {
            "1": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "G. Lyon" },
                        { type: "M", line: "1", colorClass: "m1", label: "+ M5 Bastille" },
                        { label: "🚶‍♂️ 4m" },
                        { label: "19h26", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Gare Chessy", desc: "Montez dans le RER A direction Paris." },
                        { time: "18h58", title: "Arrivée Gare de Lyon", desc: "Rejoignez le Métro 1 direction La Défense (Marche : 2 min). Attente : ~2 min.", isTransfer: true },
                        { time: "19h02", title: "Métro 1", desc: "Prenez le Métro 1. Descendez à Bastille.", arrTime: "19h04" },
                        { time: "19h04", title: "Correspondance Bastille", desc: "Rejoignez les quais de la ligne 5 direction Bobigny (Marche : 3 min). Attente : ~3 min.", isTransfer: true },
                        { time: "19h10", title: "Métro 5", desc: "Prenez le métro 5 jusqu'à Stalingrad.", arrTime: "19h22" },
                        { time: "19h22", title: "Arrivée Stalingrad", desc: "Marche de 4 min vers le domicile à 19h26." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours (Plus rapide !)",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Fontenay" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "19h14", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Gare Chessy", desc: "Prenez le RER A direction Paris. Descendez à Val de Fontenay.", arrTime: "18h45" },
                        { time: "18h45", title: "Correspondance Val de Fontenay", desc: "Rejoignez les quais du RER E direction Haussmann (Marche : 2 min). Attente : ~4 min.", isTransfer: true },
                        { time: "18h51", title: "RER E", desc: "Prenez le RER E. Descendez à Magenta.", arrTime: "19h06" },
                        { time: "19h06", title: "Arrivée Magenta", desc: "Marchez 8 min vers votre domicile (arr. 19h14). Évite 12 min de trajet par rapport au RER A complet." }
                    ]
                }
            ],
            "2": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Châtelet" },
                        { type: "M", line: "7", colorClass: "m7", label: "Stalingrad" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "19h30", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Gare Chessy", desc: "Prenez le RER A. Descendez à Châtelet-Les Halles.", arrTime: "19h02" },
                        { time: "19h02", title: "Correspondance Châtelet", desc: "Rejoignez le Métro 7 direction La Courneuve (Marche : 5 min). Attente Ligne 7 : ~3 min.", isTransfer: true },
                        { time: "19h10", title: "Métro 7", desc: "Prenez la ligne 7 jusqu'à Stalingrad.", arrTime: "19h22" },
                        { time: "19h22", title: "Arrivée Stalingrad L7", desc: "Sortie des quais profonds (Marche : 8 min) pour rejoindre le domicile à 19h30." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours (Conseillé !)",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "RER", line: "A", colorClass: "rera", label: "Fontenay" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "19h14", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Gare Chessy", desc: "RER A direction Paris &rarr; Val de Fontenay (arr. 18h45).", arrTime: "18h45" },
                        { time: "18h45", title: "Correspondance Val de Fontenay", desc: "Marche : 2 min | Attente RER E : 4 min.", isTransfer: true },
                        { time: "18h51", title: "RER E", desc: "RER E direction Haussmann &rarr; Magenta (arr. 19h06).", arrTime: "19h06" },
                        { time: "19h06", title: "Arrivée Magenta", desc: "Marchez 8 min vers le domicile à 19h14." }
                    ]
                }
            ],
            "3": [
                {
                    type: "A",
                    title: "Plan A : Recommandé",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "BUS", line: "2261", colorClass: "bus", label: "Esbly" },
                        { type: "TRAIN", line: "P", colorClass: "trainp", label: "Paris Est" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "19h39", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Gare Chessy", desc: "Prenez le bus 2261 ou 2262 en direction d'Esbly Gare." },
                        { time: "18h38", title: "Arrivée Esbly", desc: "Correspondance pour le Transilien Ligne P (Marche : 2 min). Attente du train : 21 min (sécurité / train manqué de peu).", isTransfer: true },
                        { time: "19h01", title: "Ligne P", desc: "Prenez le train de la Ligne P direction Paris-Est.", arrTime: "19h31" },
                        { time: "19h31", title: "Arrivée Paris Gare de l'Est", desc: "Sortez de la gare et marchez 8 min pour rejoindre le domicile à 19h39." }
                    ]
                },
                {
                    type: "B",
                    title: "Plan B : Secours",
                    summary: [
                        { label: "18h20", class: "pill-time" },
                        { type: "BUS", line: "2292", colorClass: "bus", label: "Tournan" },
                        { type: "RER", line: "E", colorClass: "rere", label: "Magenta" },
                        { label: "🚶‍♂️ 8m" },
                        { label: "19h45", class: "pill-arrival" }
                    ],
                    steps: [
                        { time: "18h20", title: "Départ Chessy / Val d'Europe", desc: "Prenez le bus 2292 en direction de Tournan Gare." },
                        { time: "18h45", title: "Arrivée Gare de Tournan", desc: "Rejoignez la gare RER E (Marche : 2 min). Attente RER E : 22 min.", isTransfer: true },
                        { time: "19h09", title: "RER E", desc: "Prenez le RER E direction Haussmann.", arrTime: "19h37" },
                        { time: "19h37", title: "Arrivée Magenta", desc: "Sortez à Magenta et marchez 8 min vers le domicile (arr. 19h45)." }
                    ]
                }
            ]
        }
    }
};

// Application State Variables
let currentDirection = "aller"; // "aller" or "retour"
let currentTarget = "07h45";   // Default for aller: "07h45" or "08h30". For retour: "17h30" or "18h20".
let currentPhase = "1";
let includePlanB = true;

// DOM Elements
const tabButtons = document.querySelectorAll(".tab-btn");
const planBToggle = document.getElementById("plan-b-toggle");
const routesContainer = document.getElementById("routes-container");
const installBanner = document.getElementById("install-banner");
const btnInstall = document.getElementById("btn-install");
const btnCancelInstall = document.getElementById("btn-cancel-install");
const directionButtons = document.querySelectorAll(".direction-control .segment-btn");
const timeSelector = document.getElementById("time-selector");
const summaryCard = document.getElementById("summary-card");
const infoBannerText = document.getElementById("info-banner-text");

// Initialize App Setup
document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Direction Switcher Handlers
    directionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            directionButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDirection = btn.getAttribute("data-direction");
            
            // Adjust time choices based on direction
            setupTimeChoices();
            updateLabelsAndBanners();
            renderRoutes();
        });
    });

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentPhase = btn.getAttribute("data-phase");
            renderRoutes();
        });
    });

    planBToggle.addEventListener("change", (e) => {
        includePlanB = e.target.checked;
        renderRoutes();
    });

    // Initialize Time selector choices
    setupTimeChoices();
    updateLabelsAndBanners();
    
    // 2. Render initial view
    renderRoutes();

    // 3. Register Offline Service Worker
    registerServiceWorker();

    // 4. Setup PWA Installer Banner
    setupInstallBanner();
});

// Build the Time segment options based on selected direction (Aller or Retour)
function setupTimeChoices() {
    timeSelector.innerHTML = "";
    
    if (currentDirection === "aller") {
        currentTarget = "07h45";
        timeSelector.innerHTML = `
            <button class="segment-btn active" data-target="07h45">
                <span class="btn-time">07h45</span>
                <span class="btn-desc">Arrivée Cible</span>
            </button>
            <button class="segment-btn" data-target="08h30">
                <span class="btn-time">08h30-08h35</span>
                <span class="btn-desc">Arrivée Cible</span>
            </button>
        `;
    } else {
        currentTarget = "17h30";
        timeSelector.innerHTML = `
            <button class="segment-btn active" data-target="17h30">
                <span class="btn-time">17h30</span>
                <span class="btn-desc">Départ Chessy</span>
            </button>
            <button class="segment-btn" data-target="18h20">
                <span class="btn-time">18h20</span>
                <span class="btn-desc">Départ Chessy</span>
            </button>
        `;
    }

    // Attach listeners to newly generated time buttons
    const newTimeButtons = timeSelector.querySelectorAll(".segment-btn");
    newTimeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            newTimeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTarget = btn.getAttribute("data-target");
            renderRoutes();
        });
    });
}

// Update summary card and info banners based on Aller/Retour state
function updateLabelsAndBanners() {
    if (currentDirection === "aller") {
        summaryCard.innerHTML = `
            <div class="summary-item">
                <span class="label">📍 DÉPART</span>
                <span class="value">1B Rue Jacques Kablé, Paris</span>
            </div>
            <div class="divider-vertical"></div>
            <div class="summary-item">
                <span class="label">🏁 ARRIVÉE</span>
                <span class="value">Disneyland Paris (MLV)</span>
            </div>
        `;
        infoBannerText.innerHTML = `
            <strong>Gare de Nation non desservie :</strong> RER A sans arrêt du 29/06 au 30/08 inclus. La tarification Zone 5 est incluse dans votre pass Navigo Toutes Zones.
        `;
    } else {
        summaryCard.innerHTML = `
            <div class="summary-item">
                <span class="label">📍 DÉPART</span>
                <span class="value">Disneyland Paris (MLV)</span>
            </div>
            <div class="divider-vertical"></div>
            <div class="summary-item">
                <span class="label">🏁 ARRIVÉE</span>
                <span class="value">1B Rue Jacques Kablé, Paris</span>
            </div>
        `;
        infoBannerText.innerHTML = `
            <strong>Retour Travaux RER A :</strong> La gare de Nation reste fermée en direction de Paris. Pour le retour, l'itinéraire via Val de Fontenay (Plan B) puis RER E (Magenta) est souvent plus rapide et direct pour votre domicile !
        `;
    }
}

// Render dynamic route listings based on state
function renderRoutes() {
    routesContainer.innerHTML = "";
    const activeRoutes = routesData[currentDirection][currentTarget][currentPhase];
    
    if (!activeRoutes || activeRoutes.length === 0) {
        routesContainer.innerHTML = "<div class='info-banner'>Aucun itinéraire disponible.</div>";
        return;
    }

    activeRoutes.forEach((route, index) => {
        // Skip if Plan B is toggled off
        if (route.type === "B" && !includePlanB) return;

        const card = document.createElement("div");
        card.className = "route-card";
        
        // Card Header
        let headerHtml = `
            <div class="route-card-header">
                <div class="route-title">${route.title}</div>
                <span class="badge-plan ${route.type === 'A' ? 'plan-a' : 'plan-b'}">
                    ${route.type === 'A' ? 'PLAN A' : 'PLAN B'}
                </span>
            </div>
        `;

        // Horizontal pill map flow
        let summaryHtml = `<div class="route-summary-flow">`;
        route.summary.forEach((item, idx) => {
            if (item.type) {
                // Transit line pill
                summaryHtml += `
                    <div class="flow-pill">
                        <span class="badge-${item.type.toLowerCase()}">${item.type}</span>
                        <span class="line-num ${item.colorClass}">${item.line}</span>
                        <span>${item.label}</span>
                    </div>
                `;
            } else {
                // Time or walk pill
                summaryHtml += `<div class="flow-pill ${item.class || ''}">${item.label}</div>`;
            }

            if (idx < route.summary.length - 1) {
                summaryHtml += `<span class="flow-chevron">&gt;</span>`;
            }
        });
        summaryHtml += `</div>`;

        // Expandable timeline vertical steps
        let stepsHtml = `
            <div class="route-steps-container">
                <div class="timeline-steps">
        `;

        route.steps.forEach((step, idx) => {
            let nodeClass = "node-transfer";
            if (idx === 0) nodeClass = "node-start";
            else if (idx === route.steps.length - 1) nodeClass = "node-end";

            stepsHtml += `
                <div class="timeline-step ${nodeClass}">
                    <div class="step-node"></div>
                    <div class="step-time-title">
                        <span class="step-time">${step.time}</span>
                        <span class="step-title">${step.title}</span>
                    </div>
                    <div class="step-desc">${step.desc}</div>
                    ${step.arrTime ? `<div class="step-desc" style="font-weight: 500; margin-top: 1px;">Arrivée quai : ${step.arrTime}</div>` : ''}
                </div>
            `;
        });

        stepsHtml += `
                </div>
            </div>
        `;

        // Interactive trigger button to expand card
        let triggerHtml = `
            <button class="route-details-trigger">
                <span class="details-trigger-text">📄 Détails et correspondances</span>
                <span class="details-trigger-icon">▼</span>
            </button>
        `;

        card.innerHTML = headerHtml + summaryHtml + stepsHtml + triggerHtml;

        // Toggle card expansion handler
        const trigger = card.querySelector(".route-details-trigger");
        trigger.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });

        routesContainer.appendChild(card);
    });
}

// Service worker registration for 100% offline access in the metro
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service Worker registered successfully!', reg.scope))
                .catch(err => console.log('Service Worker registration failed:', err));
        });
    }
}

// Handle Web App Manifest Installation Prompt on Android devices
let deferredPrompt;

function setupInstallBanner() {
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        installBanner.classList.remove("hidden");
    });

    btnInstall.addEventListener('click', () => {
        if (!deferredPrompt) return;
        // Hide the app install banner
        installBanner.classList.add("hidden");
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });

    btnCancelInstall.addEventListener('click', () => {
        installBanner.classList.add("hidden");
    });
}

// ==========================================
// 🎮 TAMAGOTCHI EMULATOR LOGIC
// ==========================================
function initTamagotchi() {
    // States
    let hunger = 80;
    let love = 80;
    let sleep = 80;
    let isSleeping = false;
    let isDead = false;

    // DOM Elements
    const statFood = document.getElementById("stat-food");
    const statLove = document.getElementById("stat-love");
    const statSleep = document.getElementById("stat-sleep");
    const lcdDisplay = document.getElementById("lcd-display");
    const petWrapper = document.getElementById("pet-wrapper");
    const mickeyMouth = document.getElementById("mickey-mouth");
    const eyeL = document.getElementById("m-eye-l");
    const eyeR = document.getElementById("m-eye-r");
    const lcdSleeping = document.getElementById("lcd-sleeping-indicator");
    const lcdDeath = document.getElementById("lcd-death");
    const lcdAlert = document.getElementById("lcd-alert");
    const lcdFoodContainer = document.getElementById("lcd-food-container");

    const btnFeed = document.getElementById("t-btn-a");
    const btnPlay = document.getElementById("t-btn-b");
    const btnSleep = document.getElementById("t-btn-c");

    if (!statFood || !statLove || !statSleep) {
        console.warn("Tamagotchi UI elements missing!");
        return;
    }

    // Make Mickey bounce by default
    petWrapper.classList.add("pet-bounce");

    // Helper to generate bars
    function getBar(val) {
        const total = 5;
        const active = Math.round((val / 100) * total);
        let bar = "";
        for (let i = 0; i < total; i++) {
            bar += i < active ? "❚" : "░";
        }
        return bar;
    }

    // Update screen UI
    function updateScreen() {
        statFood.textContent = "🍔 " + getBar(hunger);
        statLove.textContent = "❤️ " + getBar(love);
        statSleep.textContent = "💤 " + getBar(sleep);

        // Alert if hunger is low
        if (hunger <= 25 && !isDead && !isSleeping) {
            lcdAlert.classList.remove("hidden");
        } else {
            lcdAlert.classList.add("hidden");
        }
    }

    // Float text creator (+15$, +20❤️)
    function createFloatingText(text, color = "#111827") {
        const ft = document.createElement("div");
        ft.className = "floating-text";
        ft.textContent = text;
        ft.style.color = color;
        ft.style.left = (40 + Math.random() * 20) + "%";
        ft.style.top = "30%";
        lcdDisplay.appendChild(ft);
        setTimeout(() => ft.remove(), 800);
    }

    // Feed action (Dollar bills!)
    btnFeed.addEventListener("click", () => {
        if (isDead || isSleeping) return;

        // Spawn dollar bill 💵
        const bill = document.createElement("div");
        bill.className = "dollar-bill";
        bill.textContent = "💵";
        bill.style.left = (35 + Math.random() * 30) + "%";
        bill.style.top = "10px";
        lcdFoodContainer.appendChild(bill);

        // Animate Mickey looking up and eating
        setTimeout(() => {
            bill.remove();
            
            // Eat animation
            petWrapper.classList.remove("pet-bounce");
            petWrapper.classList.add("pet-eating");
            
            // Open mouth
            mickeyMouth.setAttribute("d", "M 45 74 Q 50 82 55 74");

            // Stats increase
            hunger = Math.min(100, hunger + 20);
            createFloatingText("+20 💵", "#047857");
            updateScreen();

            setTimeout(() => {
                petWrapper.classList.remove("pet-eating");
                petWrapper.classList.add("pet-bounce");
                // Close mouth back to smile
                mickeyMouth.setAttribute("d", "M 40 71 Q 50 77 60 71");
            }, 500);
        }, 550);
    });

    // Play action (Dance!)
    btnPlay.addEventListener("click", () => {
        if (isDead || isSleeping) return;

        petWrapper.classList.remove("pet-bounce");
        petWrapper.classList.add("pet-spin");

        love = Math.min(100, love + 15);
        createFloatingText("+15 ❤️", "#b91c1c");
        updateScreen();

        setTimeout(() => {
            petWrapper.classList.remove("pet-spin");
            petWrapper.classList.add("pet-bounce");
        }, 600);
    });

    // Sleep toggle action
    btnSleep.addEventListener("click", () => {
        if (isDead) return;

        isSleeping = !isSleeping;
        if (isSleeping) {
            lcdDisplay.classList.add("dark-mode");
            lcdSleeping.classList.remove("hidden");
            petWrapper.classList.remove("pet-bounce");

            // Close eyes (flat lines)
            eyeL.setAttribute("ry", "1");
            eyeR.setAttribute("ry", "1");
            mickeyMouth.setAttribute("d", "M 46 73 Q 50 75 54 73"); // Small sleeping smile
            
            createFloatingText("Sleep...", "#1e3a8a");
        } else {
            lcdDisplay.classList.remove("dark-mode");
            lcdSleeping.classList.add("hidden");
            petWrapper.classList.add("pet-bounce");

            // Open eyes
            eyeL.setAttribute("ry", "9");
            eyeR.setAttribute("ry", "9");
            mickeyMouth.setAttribute("d", "M 40 71 Q 50 77 60 71"); // Big smile
            
            createFloatingText("Réveil !", "#b45309");
        }
        updateScreen();
    });

    // Main Game Loop (runs every 1.5 seconds)
    setInterval(() => {
        if (isDead) return;

        if (isSleeping) {
            sleep = Math.min(100, sleep + 5);
            hunger = Math.max(0, hunger - 1.5);
            love = Math.max(0, love - 1);
            
            // Spawn little floating Zzz
            if (Math.random() > 0.4) {
                createFloatingText("z", "#1e3a8a");
            }

            // Wake up automatically if fully rested
            if (sleep === 100) {
                btnSleep.click();
            }
        } else {
            hunger = Math.max(0, hunger - 2.5);
            love = Math.max(0, love - 2);
            sleep = Math.max(0, sleep - 1.5);
        }

        // Check death conditions
        if (hunger === 0 || sleep === 0) {
            isDead = true;
            lcdDeath.classList.remove("hidden");
            petWrapper.classList.add("hidden");
            lcdAlert.classList.add("hidden");
            lcdSleeping.classList.add("hidden");
        }

        updateScreen();
    }, 1500);

    // Initial render
    updateScreen();
}

// Start Tamagotchi when DOM loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTamagotchi);
} else {
    initTamagotchi();
}
