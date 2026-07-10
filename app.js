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
        installBanner.classList.add("hidden");
        deferredPrompt.prompt();
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
    let clean = 80;
    let sleep = 80;
    let level = 5;
    let exp = 0;
    let isSleeping = false;
    let isDead = false;
    
    // Activity locks
    let isWalking = false;
    let isDancing = false;
    let isPooping = false;
    let isEating = false;
    let walkFrame = 0;

    // DOM Elements
    const iconLove = document.getElementById("icon-love");
    const iconFood = document.getElementById("icon-food");
    const iconClean = document.getElementById("icon-clean");
    const iconSleep = document.getElementById("icon-sleep");

    const lcdDisplay = document.getElementById("lcd-display");
    const canvas = document.getElementById("lcd-canvas");
    const ctx = canvas.getContext("2d");
    const pixelBottomText = document.getElementById("pixel-bottom-text");
    const pixelClock = document.getElementById("pixel-clock");
    const mickeyLv = document.getElementById("mickey-lv");

    const btnFeed = document.getElementById("t-btn-a");
    const btnPlay = document.getElementById("t-btn-b");
    const btnClean = document.getElementById("t-btn-c");
    const btnSleep = document.getElementById("t-btn-d");

    if (!iconLove || !iconFood || !iconClean || !iconSleep || !canvas) {
        console.warn("Tamagotchi elements missing!");
        return;
    }

    // Active Scene: "livingroom" (default), "bedroom", "bathroom", "kitchen"
    let currentScene = "livingroom";

    // 2D Game Coordinates for Mickey Mouse
    let mickeyX = 64; // Center of screen
    let targetX = 64;
    let walkSpeed = 2; // Pixels per frame update
    let mickeyDirection = 1; // 1 = facing right, -1 = facing left
    let animFrame = 0; // Alternates for walking/dancing/eating/pooping cycles
    let walkCallback = null;

    // Sparkles particle system for Poop scene
    let poopSparkles = [];

    // Audio click feedback beeps (Web Audio API)
    function playBeep(frequency = 800, duration = 80) {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            const audioCtx = new AudioContextClass();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration / 1000);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + duration / 1000);
        } catch (e) {
            console.warn("Beep audio blocked:", e);
        }
    }

    // Helper to draw clean retro shapes on low-resolution canvas context
    function drawRect(x, y, w, h, fill, stroke = "#000000", strokeWidth = 1) {
        ctx.fillStyle = fill;
        ctx.fillRect(x, y, w, h);
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.strokeRect(x, y, w, h);
        }
    }

    function drawCircle(cx, cy, r, fill, stroke = "#000000", strokeWidth = 1) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
        }
    }

    function drawEllipse(cx, cy, rx, ry, fill, stroke = "#000000", strokeWidth = 1) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
        }
    }

    // Main 2D Render Loop (conforms to visual look of the 4 photos)
    function renderGame() {
        // Clear Canvas
        ctx.fillStyle = "#bae6fd"; // Matrix Screen base color
        ctx.fillRect(0, 0, 128, 96);

        if (isDead) {
            // Draw RIP Tombstone
            ctx.fillStyle = "#1e293b";
            ctx.fillRect(0, 22, 128, 56);
            ctx.fillStyle = "#ffffff";
            ctx.font = "8px monospace";
            ctx.textAlign = "center";
            ctx.fillText("☠️ GAME OVER", 64, 46);
            ctx.fillText("RIP MICKEY", 64, 58);
            return;
        }

        // DRAW ACTIVE SCENE BACKDROP
        if (currentScene === "livingroom") {
            // Wall purple wall wallpaper with vertical stripe panels
            ctx.fillStyle = "#8b5cf6";
            ctx.fillRect(0, 22, 128, 44);
            ctx.strokeStyle = "rgba(0,0,0,0.06)";
            ctx.lineWidth = 1;
            for (let sx = 6; sx < 128; sx += 12) {
                ctx.beginPath();
                ctx.moveTo(sx, 22);
                ctx.lineTo(sx, 66);
                ctx.stroke();
            }

            // Star Garland at top of wallpaper
            ctx.fillStyle = "#facc15";
            for (let starX = 20; starX < 120; starX += 16) {
                ctx.fillRect(starX, 30, 2, 2);
                ctx.fillRect(starX - 1, 31, 4, 1);
            }

            // Floor wood brown
            drawRect(0, 66, 128, 12, "#d97706", "#78350f", 1);

            // Floor Lamp
            ctx.beginPath();
            ctx.moveTo(85, 34);
            ctx.lineTo(85, 68);
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1;
            ctx.stroke();
            drawCircle(85, 68, 4, "#000000", null);
            // Lampshade yellow
            ctx.fillStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(80, 36);
            ctx.lineTo(90, 36);
            ctx.lineTo(87, 28);
            ctx.lineTo(83, 28);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "#000000";
            ctx.stroke();

            // Couch Green
            drawRect(6, 48, 30, 18, "#22c55e", "#000000", 1);
            drawRect(8, 46, 26, 6, "#15803d", "#000000", 1);
            drawRect(4, 52, 4, 14, "#15803d", "#000000", 1);
            drawRect(34, 52, 4, 14, "#15803d", "#000000", 1);

            // Armchair Orange
            drawRect(102, 48, 20, 18, "#f97316", "#000000", 1);
            drawRect(104, 46, 16, 6, "#c2410c", "#000000", 1);
            drawRect(100, 52, 4, 14, "#c2410c", "#000000", 1);
            drawRect(120, 52, 4, 14, "#c2410c", "#000000", 1);

            // Disco Ball & light rays
            if (isDancing) {
                // Ball
                drawCircle(64, 28, 6, "#cbd5e1", "#475569", 1);
                ctx.beginPath();
                ctx.moveTo(64, 22);
                ctx.lineTo(64, 25);
                ctx.stroke();
                // Alternating Disco Light beams
                ctx.fillStyle = animFrame % 2 === 0 ? "rgba(255, 255, 0, 0.15)" : "rgba(255, 0, 255, 0.15)";
                ctx.beginPath();
                ctx.moveTo(64, 28);
                ctx.lineTo(10, 66);
                ctx.lineTo(40, 66);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(64, 28);
                ctx.lineTo(118, 66);
                ctx.lineTo(88, 66);
                ctx.closePath();
                ctx.fill();
            }

        } else if (currentScene === "bedroom") {
            // Wall beige with fine vertical stripes
            ctx.fillStyle = "#fef3c7";
            ctx.fillRect(0, 22, 128, 44);
            ctx.strokeStyle = "rgba(120,53,4,0.05)";
            ctx.lineWidth = 1;
            for (let sx = 8; sx < 128; sx += 8) {
                ctx.beginPath();
                ctx.moveTo(sx, 22);
                ctx.lineTo(sx, 66);
                ctx.stroke();
            }

            // Floor oak wood
            drawRect(0, 66, 128, 12, "#ca8a04", "#854d0e", 1);

            // Wall Clock on Left
            drawCircle(20, 36, 6, "#ffffff", "#000000", 1);
            ctx.beginPath();
            ctx.moveTo(20, 36);
            ctx.lineTo(20, 32);
            ctx.moveTo(20, 36);
            ctx.lineTo(23, 36);
            ctx.strokeStyle = "#000000";
            ctx.stroke();

            // Window with Curtains
            drawRect(90, 26, 24, 30, "#bae6fd", "#000000", 1);
            // Grid lines
            ctx.beginPath();
            ctx.moveTo(102, 26); ctx.lineTo(102, 56);
            ctx.moveTo(90, 41); ctx.lineTo(114, 41);
            ctx.strokeStyle = "#475569";
            ctx.stroke();
            // Blue Curtains
            drawRect(90, 26, 4, 30, "#3b82f6", "#000000", 1);
            drawRect(110, 26, 4, 30, "#3b82f6", "#000000", 1);

            // Wooden Bed base (drawn under Mickey)
            drawRect(6, 48, 4, 22, "#78350f", "#000000", 1); // Headboard
            drawRect(44, 56, 4, 14, "#78350f", "#000000", 1); // Footboard
            drawRect(10, 58, 34, 10, "#78350f", "#000000", 1); // Frame
            drawRect(10, 54, 34, 4, "#ffffff", "#94a3b8", 1); // Mattress
            drawRect(12, 50, 8, 4, "#e2e8f0", "#94a3b8", 1); // Pillow

        } else if (currentScene === "bathroom") {
            // White tiled wall grid
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 22, 128, 44);
            ctx.strokeStyle = "rgba(14,165,233,0.06)";
            ctx.lineWidth = 1;
            for (let sx = 8; sx < 128; sx += 8) {
                ctx.beginPath();
                ctx.moveTo(sx, 22); ctx.lineTo(sx, 66);
                ctx.stroke();
            }
            for (let sy = 22; sy < 66; sy += 8) {
                ctx.beginPath();
                ctx.moveTo(0, sy); ctx.lineTo(128, sy);
                ctx.stroke();
            }

            // Floor blue tiles
            drawRect(0, 66, 128, 12, "#a5f3fc", "#0ea5e9", 1);

            // Sink and Mirror
            drawRect(104, 48, 4, 20, "#cbd5e1", "#000000", 1); // Column
            drawRect(98, 42, 16, 6, "#ffffff", "#000000", 1); // Bowl
            // Mirror
            drawRect(100, 24, 12, 14, "#bae6fd", "#000000", 1);

            // Toilet bowl (drawn behind sitting Mickey)
            drawRect(12, 38, 12, 28, "#ffffff", "#000000", 1); // Tank
            drawRect(24, 48, 16, 18, "#ffffff", "#000000", 1); // Bowl base
            drawEllipse(32, 48, 8, 3, "#ffffff", "#000000", 1); // Seat ring

            // Poop Sparkles explosion
            if (isPooping) {
                poopSparkles.forEach(s => {
                    ctx.fillStyle = s.color;
                    ctx.fillRect(s.x, s.y, 2.5, 2.5);
                });
            }

        } else if (currentScene === "kitchen") {
            // Peach wallpaper
            ctx.fillStyle = "#fed7aa";
            ctx.fillRect(0, 22, 128, 44);
            ctx.strokeStyle = "rgba(0,0,0,0.04)";
            ctx.lineWidth = 1;
            for (let sx = 10; sx < 128; sx += 10) {
                ctx.beginPath();
                ctx.moveTo(sx, 22); ctx.lineTo(sx, 66);
                ctx.stroke();
            }

            // Floor Checkered tile
            ctx.fillStyle = "#e2e8f0";
            ctx.fillRect(0, 66, 128, 12);
            ctx.fillStyle = "#94a3b8";
            for (let tx = 0; tx < 128; tx += 12) {
                ctx.fillRect(tx + (animFrame % 2 === 0 ? 0 : 6), 66, 6, 6);
                ctx.fillRect(tx + (animFrame % 2 === 0 ? 6 : 0), 72, 6, 6);
            }
            ctx.strokeStyle = "#000000";
            ctx.beginPath();
            ctx.moveTo(0, 66); ctx.lineTo(128, 66);
            ctx.stroke();

            // Cabinet
            drawRect(6, 26, 24, 20, "#a16207", "#000000", 1);
            ctx.beginPath();
            ctx.moveTo(18, 26); ctx.lineTo(18, 46);
            ctx.stroke();

            // Stove oven
            drawRect(98, 42, 24, 24, "#cbd5e1", "#000000", 1);
            drawRect(102, 48, 16, 12, "#475569", "#000000", 1); // door

            // Table & Chair
            drawRect(60, 52, 4, 14, "#78350f", "#000000", 1); // Leg
            drawEllipse(62, 52, 16, 3, "#a16207", "#000000", 1); // Top

            drawRect(34, 44, 3, 22, "#78350f", "#000000", 1); // Backrest
            drawRect(34, 52, 10, 2, "#a16207", "#000000", 1); // Seat
            drawRect(41, 54, 2, 12, "#78350f", "#000000", 1); // Leg

            // Blue bowl on table
            if (isEating) {
                drawRect(56, 48, 8, 4, "#3b82f6", "#000000", 1);
                // Loops cereal dots
                ctx.fillStyle = "#ef4444"; ctx.fillRect(57, 47, 1.5, 1.5);
                ctx.fillStyle = "#facc15"; ctx.fillRect(59, 46.5, 1.5, 1.5);
                ctx.fillStyle = "#22c55e"; ctx.fillRect(61, 47, 1.5, 1.5);
            }
        }

        // DRAW CHARACTER MICKEY MOUSE (Low-res 2D Sprite alignment)
        let posture = "idle";
        if (isSleeping) posture = "sleep";
        else if (isPooping) posture = "poop";
        else if (isEating) posture = "eat";
        else if (isDancing) posture = animFrame % 2 === 0 ? "dance1" : "dance2";
        else if (isWalking) posture = walkFrame === 0 ? "walk1" : "walk2";

        drawMickeyPixel(mickeyX, 66, posture, mickeyDirection);

        // Blanket Overlay (drawn on top of Mickey when sleeping)
        if (currentScene === "bedroom" && isSleeping) {
            drawRect(20, 54, 26, 12, "#3b82f6", "#000000", 1);
        }

        // Alerts dark screen dimmer (SOMMEIL mode)
        if (isSleeping && currentScene === "bedroom") {
            ctx.fillStyle = "rgba(10, 25, 47, 0.65)";
            ctx.fillRect(0, 22, 128, 56);
        }
    }

    // 2D Pixelated Mickey Mouse Draw Engine
    function drawMickeyPixel(x, y, posture, direction) {
        ctx.save();
        
        // Horizontal flip adjustment if facing left
        if (direction === -1) {
            ctx.translate(x * 2, 0);
            ctx.scale(-1, 1);
            x = x;
        }

        if (posture === "sleep") {
            // Rotation flat coordinates
            let headX = 18;
            let bodyX = 28;
            let legX = 38;
            let sleepY = 56;

            // Tail
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(bodyX + 2, sleepY + 4);
            ctx.quadraticCurveTo(bodyX + 6, sleepY + 10, bodyX + 12, sleepY + 6);
            ctx.stroke();

            // Shoes Yellow
            drawEllipse(legX + 6, sleepY, 4, 3, "#facc15", "#000000", 1);
            drawEllipse(legX + 6, sleepY + 4, 4, 3, "#facc15", "#000000", 1);

            // Legs
            drawRect(bodyX + 4, sleepY, 4, 1.5, "#000000", null);
            drawRect(bodyX + 4, sleepY + 4, 4, 1.5, "#000000", null);

            // Body
            drawEllipse(bodyX, sleepY + 2, 6, 5, "#000000", "#000000", 1);

            // Shorts Red
            drawRect(bodyX - 2, sleepY - 2, 5, 8, "#ef4444", "#000000", 1);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(bodyX - 1, sleepY + 1, 1, 2);

            // Arms white glove
            drawCircle(bodyX - 4, sleepY + 5, 2, "#ffffff", "#000000", 1);

            // Head & Ears
            drawCircle(headX, sleepY + 2, 6, "#000000", "#000000", 1);
            drawCircle(headX - 3, sleepY - 4, 3.5, "#000000", "#000000", 1); // Ear
            drawCircle(headX + 3, sleepY - 4, 3.5, "#000000", "#000000", 1); // Ear

            // Face mask cream
            drawEllipse(headX + 1, sleepY + 2, 4, 3, "#ede6d5", null);
            drawCircle(headX - 1, sleepY + 1, 2.5, "#ede6d5", null);
            drawCircle(headX - 1, sleepY + 3, 2.5, "#ede6d5", null);

            // Sleep Eyes closed horizontal bars
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(headX - 2, sleepY + 1); ctx.lineTo(headX, sleepY + 1);
            ctx.moveTo(headX - 2, sleepY + 3); ctx.lineTo(headX, sleepY + 3);
            ctx.stroke();

            // Nose
            drawCircle(headX + 4, sleepY + 2, 1.2, "#000000", null);

        } else if (posture === "poop") {
            // Sitting on toilet facing right
            let sitX = 35;
            let sitY = 56;

            // Bare butt cheeks
            drawCircle(sitX - 4, sitY + 2, 3, "#000000", "#000000", 1);
            drawCircle(sitX - 1, sitY + 2, 3, "#000000", "#000000", 1);

            // Red shorts down to ankles
            drawRect(sitX - 4, sitY + 8, 8, 4, "#ef4444", "#000000", 1);

            // Yellow shoes
            drawEllipse(sitX + 2, sitY + 11, 4.5, 2.5, "#facc15", "#000000", 1);

            // Torso
            drawEllipse(sitX - 1, sitY - 4, 5, 6, "#000000", "#000000", 1);

            // Wiggling waving hands
            drawCircle(sitX + 4, sitY - 2, 2, "#ffffff", "#000000", 1);

            // Head and Ears
            drawCircle(sitX, sitY - 14, 6, "#000000", "#000000", 1);
            drawCircle(sitX - 4, sitY - 20, 4, "#000000", "#000000", 1);
            drawCircle(sitX + 4, sitY - 20, 4, "#000000", "#000000", 1);

            // Face cheeks cream
            drawEllipse(sitX + 1, sitY - 13, 3.5, 2.8, "#ede6d5", null);
            drawCircle(sitX - 1, sitY - 14, 2.2, "#ede6d5", null);
            drawCircle(sitX - 1, sitY - 12, 2.2, "#ede6d5", null);

            // Face outline chin
            ctx.beginPath();
            ctx.arc(sitX, sitY - 14, 6, 0.2, Math.PI - 0.2);
            ctx.strokeStyle = "#000000";
            ctx.stroke();

            // Eyes open wiggling
            drawEllipse(sitX + 1, sitY - 15, 1, 2, "#ffffff", "#000000", 0.8);
            drawEllipse(sitX + 1, sitY - 11, 1, 2, "#ffffff", "#000000", 0.8);
            ctx.fillStyle = "#000000";
            ctx.fillRect(sitX + 1.2, sitY - 14.5, 0.8, 1);
            ctx.fillRect(sitX + 1.2, sitY - 10.5, 0.8, 1);

            // Snout / Nose
            drawCircle(sitX + 4, sitY - 13, 1.2, "#000000", null);

            // Mouth
            ctx.strokeStyle = "#000000";
            ctx.beginPath();
            ctx.arc(sitX + 2, sitY - 13, 2, -1, 1);
            ctx.stroke();

        } else if (posture === "eat") {
            // Sitting on chair facing right
            let sitX = 43;
            let sitY = 56;

            // Torso
            drawEllipse(sitX - 4, sitY - 2, 5, 6, "#000000", "#000000", 1);

            // Red shorts
            drawRect(sitX - 8, sitY + 2, 7, 5, "#ef4444", "#000000", 1);
            // Yellow shoes
            drawEllipse(sitX - 2, sitY + 11, 4.5, 2.5, "#facc15", "#000000", 1);

            // Spoon hand waving/eating loop
            let spoonOffset = animFrame % 2 === 0 ? -3 : 1;
            drawCircle(sitX + 3, sitY - 2 + spoonOffset, 2, "#ffffff", "#000000", 1);
            // Spoon line
            ctx.strokeStyle = "#64748b";
            ctx.beginPath();
            ctx.moveTo(sitX + 5, sitY - 2 + spoonOffset);
            ctx.lineTo(sitX + 9, sitY - 5 + spoonOffset);
            ctx.stroke();

            // Head and Ears
            drawCircle(sitX, sitY - 12, 6, "#000000", "#000000", 1);
            drawCircle(sitX - 4, sitY - 18, 4, "#000000", "#000000", 1);
            drawCircle(sitX + 4, sitY - 18, 4, "#000000", "#000000", 1);

            // Face cheeks cream
            drawEllipse(sitX + 1, sitY - 11, 3.5, 2.8, "#ede6d5", null);
            drawCircle(sitX - 1, sitY - 12, 2.2, "#ede6d5", null);
            drawCircle(sitX - 1, sitY - 10, 2.2, "#ede6d5", null);

            // Eyes
            drawEllipse(sitX + 1, sitY - 13, 1, 2, "#ffffff", "#000000", 0.8);
            drawEllipse(sitX + 1, sitY - 9, 1, 2, "#ffffff", "#000000", 0.8);

            // Nose
            drawCircle(sitX + 4, sitY - 11, 1.2, "#000000", null);

            // Chewing open mouth if frame % 2 === 0
            if (animFrame % 2 === 0) {
                drawCircle(sitX + 2, sitY - 11, 1.5, "#be123c", "#000000", 1);
            } else {
                ctx.strokeStyle = "#000000";
                ctx.beginPath();
                ctx.arc(sitX + 2, sitY - 11, 2, -1, 1);
                ctx.stroke();
            }

        } else {
            // Default postures: "idle", "walk1", "walk2", "dance1", "dance2"
            let bobY = 0;
            if (posture === "walk1" || posture === "dance1") bobY = -1.5;

            // Tail
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x - 4, y - 10 + bobY);
            ctx.quadraticCurveTo(x - 12, y - 5 + bobY, x - 15, y - 12 + bobY);
            ctx.stroke();

            // Shoes Yellow
            let leftShoeY = y - 2;
            let rightShoeY = y - 2;
            if (posture === "walk1") leftShoeY -= 2;
            if (posture === "walk2") rightShoeY -= 2;

            drawEllipse(x - 5, leftShoeY, 5, 3.2, "#facc15", "#000000", 1);
            drawEllipse(x + 5, rightShoeY, 5, 3.2, "#facc15", "#000000", 1);

            // Legs
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(x - 3, y - 10 + bobY); ctx.lineTo(x - 4, leftShoeY - 1);
            ctx.moveTo(x + 3, y - 10 + bobY); ctx.lineTo(x + 4, rightShoeY - 1);
            ctx.stroke();

            // Torso
            drawEllipse(x, y - 15 + bobY, 6, 8, "#000000", "#000000", 1);

            // Shorts Red
            drawEllipse(x, y - 11 + bobY, 6.2, 4.2, "#ef4444", "#000000", 1);
            // Oval buttons white
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x - 2, y - 12 + bobY, 1, 2.2);
            ctx.fillRect(x + 1, y - 12 + bobY, 1, 2.2);

            // Head and Ears
            drawCircle(x, y - 25 + bobY, 6.5, "#000000", "#000000", 1);
            drawCircle(x - 6, y - 31 + bobY, 4.5, "#000000", "#000000", 1);
            drawCircle(x + 6, y - 31 + bobY, 4.5, "#000000", "#000000", 1);

            // Face cheeks cream
            drawEllipse(x, y - 24 + bobY, 4.2, 3, "#ede6d5", null);
            drawCircle(x - 2, y - 25 + bobY, 2.5, "#ede6d5", null);
            drawCircle(x + 2, y - 25 + bobY, 2.5, "#ede6d5", null);

            // Eyes pie-eyes
            drawEllipse(x - 2, y - 27 + bobY, 1.2, 2.5, "#ffffff", "#000000", 0.8);
            drawEllipse(x + 2, y - 27 + bobY, 1.2, 2.5, "#ffffff", "#000000", 0.8);
            ctx.fillStyle = "#000000";
            ctx.fillRect(x - 2, y - 26.5 + bobY, 1, 1.5);
            ctx.fillRect(x + 1.8, y - 26.5 + bobY, 1, 1.5);

            // Chin outline
            ctx.beginPath();
            ctx.arc(x, y - 25 + bobY, 6.5, 0.2, Math.PI - 0.2);
            ctx.strokeStyle = "#000000";
            ctx.stroke();

            // Snout / Nose
            drawCircle(x, y - 23 + bobY, 1.5, "#000000", null);

            // Mouth
            drawCircle(x, y - 22 + bobY, 2, "#be123c", "#000000", 1);
            ctx.strokeStyle = "#000000";
            ctx.beginPath();
            ctx.arc(x, y - 22.5 + bobY, 2.5, -0.2, Math.PI + 0.2);
            ctx.stroke();

            // ARMS & HANDS
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2.2;
            if (posture === "dance1") {
                // Dance pose 1: arms diagonal pointing up left, down right
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 18 + bobY); ctx.lineTo(x - 12, y - 26 + bobY);
                ctx.moveTo(x + 5, y - 18 + bobY); ctx.lineTo(x + 12, y - 10 + bobY);
                ctx.stroke();
                drawCircle(x - 12, y - 26 + bobY, 2, "#ffffff", "#000000", 1);
                drawCircle(x + 12, y - 10 + bobY, 2, "#ffffff", "#000000", 1);

            } else if (posture === "dance2") {
                // Dance pose 2: arms diagonal pointing down left, up right
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 18 + bobY); ctx.lineTo(x - 12, y - 10 + bobY);
                ctx.moveTo(x + 5, y - 18 + bobY); ctx.lineTo(x + 12, y - 26 + bobY);
                ctx.stroke();
                drawCircle(x - 12, y - 10 + bobY, 2, "#ffffff", "#000000", 1);
                drawCircle(x + 12, y - 26 + bobY, 2, "#ffffff", "#000000", 1);

            } else {
                // Default: Waving left arm raised high, right arm lowered
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 18 + bobY); ctx.lineTo(x - 11, y - 12 + bobY); // arm lowered
                ctx.moveTo(x + 5, y - 18 + bobY); ctx.lineTo(x + 12, y - 28 + bobY); // arm waving up
                ctx.stroke();
                drawCircle(x - 11, y - 12 + bobY, 2, "#ffffff", "#000000", 1);
                drawCircle(x + 12, y - 28 + bobY, 2, "#ffffff", "#000000", 1);
            }
        }

        ctx.restore();
    }

    // Cycle bottom text display
    const statusCycle = ["happiness", "hunger", "cleanliness", "energy"];
    let cycleIndex = 0;
    
    function updateBottomText() {
        if (isDead) {
            pixelBottomText.textContent = "GAME OVER";
            return;
        }
        if (isSleeping) {
            pixelBottomText.textContent = "SLEEPING...";
            return;
        }
        if (isDancing) {
            pixelBottomText.textContent = "DISCO! DANCE MOVES!";
            return;
        }
        if (isPooping) {
            pixelBottomText.textContent = "POOP TIME! *sparkles*";
            return;
        }
        if (isEating) {
            pixelBottomText.textContent = "YUMMY! EATING!";
            return;
        }

        const currentStat = statusCycle[cycleIndex];
        if (currentStat === "happiness") {
            pixelBottomText.textContent = `HAPPINESS: ${Math.round(love)}%`;
        } else if (currentStat === "hunger") {
            pixelBottomText.textContent = `HUNGER: ${Math.round(100 - hunger)}%`;
        } else if (currentStat === "cleanliness") {
            pixelBottomText.textContent = `CLEAN: ${Math.round(clean)}%`;
        } else if (currentStat === "energy") {
            pixelBottomText.textContent = `ENERGY: ${Math.round(sleep)}%`;
        }
        
        cycleIndex = (cycleIndex + 1) % statusCycle.length;
    }

    // Walking / Animation loop (runs at 8fps = 125ms per frame)
    let animationTimer = setInterval(() => {
        if (isDead) return;

        animFrame++;

        // Update toilet sparkles
        if (isPooping) {
            if (poopSparkles.length < 15) {
                const colors = ["#ff007f", "#00ffff", "#39ff14", "#ff00ff", "#ffff00", "#ff7f00"];
                poopSparkles.push({
                    x: 36,
                    y: 52,
                    vx: 2 + Math.random() * 4,
                    vy: -2 + Math.random() * 4 - 2,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
            poopSparkles.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.2; // gravity
            });
            poopSparkles = poopSparkles.filter(s => s.x < 110 && s.y < 78);
        } else {
            poopSparkles = [];
        }

        // Handle walking movement
        if (mickeyX !== targetX) {
            isWalking = true;
            const dist = targetX - mickeyX;
            mickeyDirection = dist > 0 ? 1 : -1;
            if (Math.abs(dist) <= walkSpeed) {
                mickeyX = targetX;
                isWalking = false;
                if (walkCallback) {
                    const cb = walkCallback;
                    walkCallback = null;
                    cb(true);
                }
            } else {
                mickeyX += mickeyDirection * walkSpeed;
            }
        } else {
            isWalking = false;
        }

        // Draw the frame
        renderGame();
    }, 125);

    // AI Walking logic (triggers target changes periodically)
    let aiTimer = setInterval(() => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        
        // 35% chance to walk
        if (Math.random() < 0.35) {
            targetX = 40 + Math.floor(Math.random() * 48); // Walk in middle range
        }
    }, 4500);

    // Stats updates screen indicators
    function updateScreen() {
        if (mickeyLv) mickeyLv.textContent = level;

        // Blinking indicators on top bar based on low stats
        if (love <= 25) iconLove.classList.add("active", "blinking");
        else iconLove.classList.remove("active", "blinking");

        if (hunger <= 25) iconFood.classList.add("active", "blinking");
        else iconFood.classList.remove("active", "blinking");

        if (clean <= 25) iconClean.classList.add("active", "blinking");
        else iconClean.classList.remove("active", "blinking");

        if (sleep <= 25) iconSleep.classList.add("active", "blinking");
        else iconSleep.classList.remove("active", "blinking");
    }

    function gainExp() {
        exp += 1;
        if (exp >= 5) {
            exp = 0;
            level += 1;
            updateScreen();
        }
    }

    // Feed action: switch to kitchen, sit on chair, chew bowl cereal
    btnFeed.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        playBeep(650, 70);
        setTimeout(() => playBeep(800, 70), 85);

        isEating = true;
        iconFood.classList.add("active");
        currentScene = "kitchen";
        targetX = 44; // chair position

        walkCallback = (success) => {
            if (!success) {
                isEating = false;
                iconFood.classList.remove("active");
                currentScene = "livingroom";
                return;
            }

            // Sit and chew for 1500ms
            setTimeout(() => {
                hunger = Math.min(100, hunger + 20);
                gainExp();
                updateScreen();
                updateBottomText();

                setTimeout(() => {
                    currentScene = "livingroom";
                    isEating = false;
                    iconFood.classList.remove("active");
                    updateBottomText();
                    targetX = 64; // return to center
                }, 1000);
            }, 1000);
        };
    });

    // Play action: disco dance center
    btnPlay.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        playBeep(800, 60);
        setTimeout(() => playBeep(1000, 60), 75);
        setTimeout(() => playBeep(1200, 60), 150);

        isDancing = true;
        iconLove.classList.add("active");
        targetX = 64;

        walkCallback = (success) => {
            // Dance for 3 seconds
            setTimeout(() => {
                love = Math.min(100, love + 20);
                gainExp();
                updateScreen();
                updateBottomText();

                isDancing = false;
                iconLove.classList.remove("active");
                updateBottomText();
            }, 3000);
        };
    });

    // Clean action: bathroom toilet poop sparkles
    btnClean.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        playBeep(450, 150);

        isPooping = true;
        iconClean.classList.add("active");
        currentScene = "bathroom";
        targetX = 36; // toilet seat x

        walkCallback = (success) => {
            if (!success) {
                isPooping = false;
                iconClean.classList.remove("active");
                currentScene = "livingroom";
                return;
            }

            // Poop for 2.5 seconds
            setTimeout(() => {
                clean = Math.min(100, clean + 25);
                updateScreen();
                updateBottomText();

                currentScene = "livingroom";
                isPooping = false;
                iconClean.classList.remove("active");
                updateBottomText();
                targetX = 64;
            }, 2500);
        };
    });

    // Sleep toggle action: bedroom bed lie down
    btnSleep.addEventListener("click", () => {
        if (isDead || isWalking || isDancing || isPooping || isEating) return;
        playBeep(320, 180);

        if (!isSleeping) {
            // Sleep
            iconSleep.classList.add("active");
            currentScene = "bedroom";
            targetX = 20; // bed position

            walkCallback = (success) => {
                isSleeping = true;
                mickeyX = 20; // force bed x
                updateScreen();
                updateBottomText();
            };
        } else {
            // Wake up
            isSleeping = false;
            iconSleep.classList.remove("active");
            currentScene = "livingroom";
            updateScreen();
            updateBottomText();
            targetX = 64;
        }
    });

    // Stats decay loop (every 1.5 seconds)
    let decayTimer = setInterval(() => {
        if (isDead) return;

        if (isSleeping) {
            sleep = Math.min(100, sleep + 6);
            hunger = Math.max(0, hunger - 1);
            love = Math.max(0, love - 1);
            clean = Math.max(0, clean - 0.5);

            if (sleep === 100) {
                btnSleep.click(); // awake
            }
        } else {
            hunger = Math.max(0, hunger - 2);
            love = Math.max(0, love - 1.5);
            clean = Math.max(0, clean - 2.5);
            sleep = Math.max(0, sleep - 1);
        }

        if (hunger === 0 || sleep === 0 || clean === 0) {
            isDead = true;
            updateBottomText();
        }

        updateScreen();
    }, 1500);

    updateScreen();
    updateBottomText();
}

// Start Tamagotchi when DOM loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTamagotchi);
} else {
    initTamagotchi();
}
