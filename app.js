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
// 🎮 3D ADIBOU-STYLE MICKEY GAME ENGINE
// ==========================================
function initTamagotchi() {
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error("Three.js library is not loaded!");
        document.getElementById("action-text").textContent = "Erreur: Three.js manquant";
        return;
    }

    // Stats states
    let hunger = 80;
    let love = 80;
    let clean = 80;
    let sleep = 80;
    let level = 5;
    let exp = 0;
    let isSleeping = false;
    let isDead = false;
    
    // Action locks
    let isWalking = false;
    let isDancing = false;
    let isPooping = false;
    let isEating = false;

    // DOM Elements
    const hudHunger = document.getElementById("bar-hunger");
    const hudLove = document.getElementById("bar-love");
    const hudClean = document.getElementById("bar-clean");
    const hudSleep = document.getElementById("bar-sleep");
    const mickeyLv = document.getElementById("mickey-lv");
    const pixelClock = document.getElementById("pixel-clock");
    const actionText = document.getElementById("action-text");

    const btnFeed = document.getElementById("btn-feed-3d");
    const btnPlay = document.getElementById("btn-play-3d");
    const btnClean = document.getElementById("btn-clean-3d");
    const btnSleep = document.getElementById("btn-sleep-3d");

    const container = document.getElementById("canvas-3d-container");
    if (!container) return;

    // 1. Setup Three.js WebGL Renderer, Scene, Camera
    const width = container.clientWidth || 484;
    const height = container.clientHeight || 364;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbae6fd); // Light blue sky color
    scene.fog = new THREE.FogExp2(0xbae6fd, 0.005);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    // Initial camera position looking at Living Room
    camera.position.set(0, 3.5, 13);
    camera.lookAt(0, 2.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = ""; // Clear loader
    container.appendChild(renderer.domElement);

    // 2. Add Lighting (Cartoon ambient glow + Directional Shadow Caster)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50;
    const d = 15;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // 3. Materials
    const blackMat = new THREE.MeshToonMaterial({ color: 0x1e1e1e });
    const creamMat = new THREE.MeshToonMaterial({ color: 0xfde047 }); // Steamboat cheeks yellow/cream
    const redMat = new THREE.MeshToonMaterial({ color: 0xef4444 });
    const yellowMat = new THREE.MeshToonMaterial({ color: 0xfacc15 });
    const whiteMat = new THREE.MeshToonMaterial({ color: 0xffffff });
    const woodMat = new THREE.MeshToonMaterial({ color: 0xa16207 });
    const greenMat = new THREE.MeshToonMaterial({ color: 0x22c55e });
    const orangeMat = new THREE.MeshToonMaterial({ color: 0xf97316 });
    const blueMat = new THREE.MeshToonMaterial({ color: 0x3b82f6 });
    const silverMat = new THREE.MeshToonMaterial({ color: 0xcbd5e1 });

    // 4. Construct Mickey Mouse 3D procedural character model
    const mickeyGroup = new THREE.Group();
    mickeyGroup.position.set(0, 1.8, 0); // Ground position
    mickeyGroup.castShadow = true;
    mickeyGroup.receiveShadow = true;
    scene.add(mickeyGroup);

    // Head Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.9, 0);
    mickeyGroup.add(headGroup);

    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), blackMat);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Ears
    const earL = new THREE.Mesh(new THREE.SphereGeometry(0.48, 16, 16), blackMat);
    earL.position.set(-0.7, 0.7, 0);
    earL.castShadow = true;
    headGroup.add(earL);

    const earR = new THREE.Mesh(new THREE.SphereGeometry(0.48, 16, 16), blackMat);
    earR.position.set(0.7, 0.7, 0);
    earR.castShadow = true;
    headGroup.add(earR);

    // Face Snout cream mask
    const snout = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), creamMat);
    snout.position.set(0, -0.15, 0.5);
    snout.scale.set(1, 0.7, 1.2);
    headGroup.add(snout);

    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), blackMat);
    nose.position.set(0, -0.05, 0.95);
    headGroup.add(nose);

    // Cheeks
    const cheekL = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), creamMat);
    cheekL.position.set(-0.25, 0.05, 0.45);
    headGroup.add(cheekL);

    const cheekR = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), creamMat);
    cheekR.position.set(0.25, 0.05, 0.45);
    headGroup.add(cheekR);

    // Eyes
    const eyeLGroup = new THREE.Group();
    eyeLGroup.position.set(-0.18, 0.25, 0.6);
    headGroup.add(eyeLGroup);
    const eyeLWhite = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), whiteMat);
    eyeLWhite.scale.set(0.75, 1.5, 0.5);
    eyeLGroup.add(eyeLWhite);
    const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), blackMat);
    pupilL.position.set(0, 0, 0.12);
    pupilL.scale.set(0.6, 1.6, 0.5);
    eyeLGroup.add(pupilL);

    const eyeRGroup = new THREE.Group();
    eyeRGroup.position.set(0.18, 0.25, 0.6);
    headGroup.add(eyeRGroup);
    const eyeRWhite = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), whiteMat);
    eyeRWhite.scale.set(0.75, 1.5, 0.5);
    eyeRGroup.add(eyeRWhite);
    const pupilR = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), blackMat);
    pupilR.position.set(0, 0, 0.12);
    pupilR.scale.set(0.6, 1.6, 0.5);
    eyeRGroup.add(pupilR);

    // Torso (Body)
    const torsoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.55, 1.0, 16), blackMat);
    torsoMesh.position.set(0, 0.9, 0);
    torsoMesh.castShadow = true;
    mickeyGroup.add(torsoMesh);

    // Red Shorts
    const shortsGroup = new THREE.Group();
    shortsGroup.position.set(0, 0.55, 0);
    mickeyGroup.add(shortsGroup);

    const shortsMesh = new THREE.Mesh(new THREE.SphereGeometry(0.62, 16, 16), redMat);
    shortsMesh.scale.set(1, 0.8, 1);
    shortsMesh.castShadow = true;
    shortsGroup.add(shortsMesh);

    // Buttons
    const btnL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), whiteMat);
    btnL.position.set(-0.2, 0.1, 0.5);
    btnL.scale.set(0.7, 1.4, 0.6);
    shortsGroup.add(btnL);

    const btnR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), whiteMat);
    btnR.position.set(0.2, 0.1, 0.5);
    btnR.scale.set(0.7, 1.4, 0.6);
    shortsGroup.add(btnR);

    // Legs
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.9, 8), blackMat);
    legL.position.set(-0.25, 0.15, 0);
    legL.castShadow = true;
    mickeyGroup.add(legL);

    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.9, 8), blackMat);
    legR.position.set(0.25, 0.15, 0);
    legR.castShadow = true;
    mickeyGroup.add(legR);

    // Yellow Shoes
    const shoeL = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), yellowMat);
    shoeL.position.set(-0.25, -0.22, 0.12);
    shoeL.scale.set(1.1, 0.7, 1.5);
    shoeL.castShadow = true;
    mickeyGroup.add(shoeL);

    const shoeR = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), yellowMat);
    shoeR.position.set(0.25, -0.22, 0.12);
    shoeR.scale.set(1.1, 0.7, 1.5);
    shoeR.castShadow = true;
    mickeyGroup.add(shoeR);

    // Arms
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8), blackMat);
    armL.position.set(-0.6, 1.1, 0);
    armL.rotation.z = Math.PI / 4;
    armL.castShadow = true;
    mickeyGroup.add(armL);

    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8), blackMat);
    armR.position.set(0.6, 1.1, 0);
    armR.rotation.z = -Math.PI / 4;
    armR.castShadow = true;
    mickeyGroup.add(armR);

    // Gloves (Hands)
    const gloveL = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), whiteMat);
    gloveL.position.set(-0.9, 0.8, 0);
    gloveL.castShadow = true;
    mickeyGroup.add(gloveL);

    const gloveR = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), whiteMat);
    gloveR.position.set(0.9, 0.8, 0);
    gloveR.castShadow = true;
    mickeyGroup.add(gloveR);

    // Tail
    const tailGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8);
    const tail = new THREE.Mesh(tailGeo, blackMat);
    tail.position.set(0, 0.4, -0.6);
    tail.rotation.x = -Math.PI / 3;
    tail.rotation.z = -Math.PI / 8;
    mickeyGroup.add(tail);

    // 5. Construct the 3D Rooms along X Axis (Living Room at X=0, Bedroom at X=40, Bathroom at X=80, Kitchen at X=120)

    // Helper: Floor Grid Box Floor maker
    function createRoomFloor(xOffset, width, depth, color) {
        const floorGeo = new THREE.BoxGeometry(width, 0.4, depth);
        const floorMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.8 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.position.set(xOffset, -0.2, 0);
        floor.receiveShadow = true;
        scene.add(floor);
        return floor;
    }

    // Helper: Back wall maker
    function createRoomWall(xOffset, width, height, color) {
        const wallGeo = new THREE.BoxGeometry(width, height, 0.4);
        const wallMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.9 });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.set(xOffset, height / 2, -6);
        wall.receiveShadow = true;
        scene.add(wall);
        return wall;
    }

    // --- ROOM 1: LIVING ROOM (x = 0) ---
    createRoomFloor(0, 30, 12, 0x854d0e); // Wooden Floor
    createRoomWall(0, 30, 10, 0x8b5cf6);  // Purple Wall

    // Vertical striped column panels on wall
    for (let sx = -12; sx <= 12; sx += 6) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.3, 10, 0.1), new THREE.MeshStandardMaterial({ color: 0x7c3aed }));
        stripe.position.set(sx, 5, -5.7);
        scene.add(stripe);
    }

    // Star garlands on Living Room wall
    const garlandGroup = new THREE.Group();
    garlandGroup.position.set(0, 7.5, -5.5);
    scene.add(garlandGroup);
    for (let gx = -10; gx <= 10; gx += 3.5) {
        const star = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.2), yellowMat);
        star.rotation.z = Math.PI / 4;
        star.position.set(gx, Math.sin(gx) * 0.2, 0);
        garlandGroup.add(star);
    }

    // Green Couch
    const couchGroup = new THREE.Group();
    couchGroup.position.set(-6, 0.5, -3.5);
    scene.add(couchGroup);
    // Base
    const couchBase = new THREE.Mesh(new THREE.BoxGeometry(5, 0.6, 2.2), greenMat);
    couchBase.castShadow = true; couchBase.receiveShadow = true;
    couchGroup.add(couchBase);
    // Backrest
    const couchBack = new THREE.Mesh(new THREE.BoxGeometry(5, 1.4, 0.6), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    couchBack.position.set(0, 0.9, -0.8);
    couchBack.castShadow = true;
    couchGroup.add(couchBack);
    // Armrests
    const armL_Couch = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.0, 2.2), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    armL_Couch.position.set(-2.2, 0.3, 0);
    armL_Couch.castShadow = true;
    couchGroup.add(armL_Couch);
    const armR_Couch = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.0, 2.2), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    armR_Couch.position.set(2.2, 0.3, 0);
    armR_Couch.castShadow = true;
    couchGroup.add(armR_Couch);

    // Orange Armchair
    const chairGroup = new THREE.Group();
    chairGroup.position.set(6, 0.5, -3.5);
    scene.add(chairGroup);
    const chairBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 2.2), orangeMat);
    chairBase.castShadow = true; chairBase.receiveShadow = true;
    chairGroup.add(chairBase);
    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.6), new THREE.MeshStandardMaterial({ color: 0xc2410c }));
    chairBack.position.set(0, 0.9, -0.8);
    chairBack.castShadow = true;
    chairGroup.add(chairBack);
    const armL_Chair = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 2.2), new THREE.MeshStandardMaterial({ color: 0xc2410c }));
    armL_Chair.position.set(-1.0, 0.3, 0);
    armL_Chair.castShadow = true;
    chairGroup.add(armL_Chair);
    const armR_Chair = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 2.2), new THREE.MeshStandardMaterial({ color: 0xc2410c }));
    armR_Chair.position.set(1.0, 0.3, 0);
    armR_Chair.castShadow = true;
    chairGroup.add(armR_Chair);

    // Floor Lamp
    const lampGroup = new THREE.Group();
    lampGroup.position.set(2, 0, -4.5);
    scene.add(lampGroup);
    const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 5, 8), blackMat);
    lampPole.position.y = 2.5;
    lampPole.castShadow = true;
    lampGroup.add(lampPole);
    const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.0, 0.8, 16), yellowMat);
    lampShade.position.y = 4.8;
    lampShade.castShadow = true;
    lampGroup.add(lampShade);

    // Disco Ball
    const discoBall = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), silverMat);
    discoBall.position.set(0, 7.5, -2);
    discoBall.castShadow = true;
    scene.add(discoBall);
    const discoChain = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2, 8), blackMat);
    discoChain.position.set(0, 9, -2);
    scene.add(discoChain);

    // --- ROOM 2: BEDROOM (x = 40) ---
    createRoomFloor(40, 30, 12, 0x854d0e); // Oak floor
    createRoomWall(40, 30, 10, 0xfef3c7);  // Beige Wall

    // Bedroom wall stripes
    for (let sx = 28; sx <= 52; sx += 4) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 10, 0.1), new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
        stripe.position.set(sx, 5, -5.7);
        scene.add(stripe);
    }

    // Wooden Bed
    const bedGroup = new THREE.Group();
    bedGroup.position.set(34, 0, -3.5);
    scene.add(bedGroup);
    // Headboard
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3.2, 4.4), woodMat);
    headboard.position.set(-2.8, 1.4, 0);
    headboard.castShadow = true;
    bedGroup.add(headboard);
    // Mattress
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.9, 4.0), whiteMat);
    mattress.position.set(0, 0.7, 0);
    mattress.castShadow = true; mattress.receiveShadow = true;
    bedGroup.add(mattress);
    // Pillow
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 2.0), silverMat);
    pillow.position.set(-2.0, 1.25, 0);
    bedGroup.add(pillow);
    // Blue Blanket Mesh (Mickey slides under this)
    const blanket = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.0, 4.05), blueMat);
    blanket.position.set(0.9, 0.8, 0);
    blanket.castShadow = true;
    bedGroup.add(blanket);

    // Clock
    const clockGroup = new THREE.Group();
    clockGroup.position.set(40, 6, -5.7);
    scene.add(clockGroup);
    const clockBack = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 24), whiteMat);
    clockBack.rotation.x = Math.PI / 2;
    clockBack.castShadow = true;
    clockGroup.add(clockBack);
    // Clock hands
    const handH = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.05), blackMat);
    handH.position.set(0, 0.2, 0.15);
    clockGroup.add(handH);
    const handM = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.05), blackMat);
    handM.rotation.z = Math.PI / 2;
    handM.position.set(0.3, 0, 0.15);
    clockGroup.add(handM);

    // Bedroom window
    const windowGroup = new THREE.Group();
    windowGroup.position.set(46, 5, -5.7);
    scene.add(windowGroup);
    const winPane = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 0.2), blueMat); // blue pane
    windowGroup.add(winPane);
    const winFrame = new THREE.Mesh(new THREE.BoxGeometry(4.2, 5.2, 0.3), blackMat);
    winFrame.position.z = -0.05;
    windowGroup.add(winFrame);
    // Blue Curtains
    const curtainL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 5.2, 0.4), new THREE.MeshStandardMaterial({ color: 0x1d4ed8 }));
    curtainL.position.set(-2.0, 0, 0.1);
    curtainL.castShadow = true;
    windowGroup.add(curtainL);
    const curtainR = new THREE.Mesh(new THREE.BoxGeometry(0.8, 5.2, 0.4), new THREE.MeshStandardMaterial({ color: 0x1d4ed8 }));
    curtainR.position.set(2.0, 0, 0.1);
    curtainR.castShadow = true;
    windowGroup.add(curtainR);

    // --- ROOM 3: BATHROOM (x = 80) ---
    createRoomFloor(80, 30, 12, 0xa5f3fc); // Cyan tile floor
    createRoomWall(80, 30, 10, 0xffffff);  // White Wall
    // Grid tiles visual overlay lines
    for (let sx = 66; sx <= 94; sx += 4) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(0.05, 10, 0.1), new THREE.MeshStandardMaterial({ color: 0xe0f2fe }));
        line.position.set(sx, 5, -5.7);
        scene.add(line);
    }
    for (let sy = 1; sy <= 9; sy += 3) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(30, 0.05, 0.1), new THREE.MeshStandardMaterial({ color: 0xe0f2fe }));
        line.position.set(80, sy, -5.7);
        scene.add(line);
    }

    // White Toilet Bowl
    const toiletGroup = new THREE.Group();
    toiletGroup.position.set(74, 0, -3.5);
    scene.add(toiletGroup);
    // Tank
    const tank = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 2.2), whiteMat);
    tank.position.set(-1.0, 1.7, 0);
    tank.castShadow = true;
    toiletGroup.add(tank);
    // Bowl
    const bowlBase = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 1.2, 16), whiteMat);
    bowlBase.position.set(0.3, 0.6, 0);
    bowlBase.castShadow = true;
    toiletGroup.add(bowlBase);
    // Seat ring
    const seat = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.12, 8, 24), blackMat);
    seat.rotation.x = Math.PI / 2;
    seat.position.set(0.3, 1.2, 0);
    seat.scale.set(1, 1.2, 1);
    toiletGroup.add(seat);

    // Sink and Mirror
    const sinkGroup = new THREE.Group();
    sinkGroup.position.set(86, 0, -3.5);
    scene.add(sinkGroup);
    const sinkCol = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.6, 8), whiteMat);
    sinkCol.position.y = 0.8;
    sinkCol.castShadow = true;
    sinkGroup.add(sinkCol);
    const sinkBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.6, 0.6, 16), whiteMat);
    sinkBowl.position.y = 1.6;
    sinkBowl.castShadow = true;
    sinkGroup.add(sinkBowl);
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.4, 0.2), blueMat);
    mirror.position.set(0, 3.8, -1.9);
    mirror.castShadow = true;
    sinkGroup.add(mirror);

    // 3D Particles Sparkles Array for Toilet Poop animation
    const sparkles = [];
    const sparkleColors = [0xff007f, 0x00ffff, 0x39ff14, 0xff00ff, 0xffff00, 0xff7f00];
    const sparkleGeo = new THREE.SphereGeometry(0.12, 8, 8);
    for (let i = 0; i < 20; i++) {
        const spMat = new THREE.MeshBasicMaterial({ color: sparkleColors[i % sparkleColors.length] });
        const spMesh = new THREE.Mesh(sparkleGeo, spMat);
        spMesh.visible = false;
        scene.add(spMesh);
        sparkles.push({
            mesh: spMesh,
            vx: 0,
            vy: 0,
            vz: 0,
            age: 0
        });
    }

    // --- ROOM 4: KITCHEN (x = 120) ---
    createRoomFloor(120, 30, 12, 0xd1d5db); // Checkered Base Floor
    createRoomWall(120, 30, 10, 0xfed7aa);  // Peach wall

    // Kitchen fine stripes
    for (let sx = 108; sx <= 132; sx += 5) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 10, 0.1), new THREE.MeshStandardMaterial({ color: 0xffedd5 }));
        stripe.position.set(sx, 5, -5.7);
        scene.add(stripe);
    }

    // Oven Stove
    const stove = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.2, 2.2), silverMat);
    stove.position.set(131, 1.1, -3.5);
    stove.castShadow = true;
    scene.add(stove);
    const stoveDoor = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 0.1), blackMat);
    stoveDoor.position.set(131, 1.1, -2.35);
    scene.add(stoveDoor);

    // Wall Cabinet
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.0, 1.2), woodMat);
    cabinet.position.set(110, 6.2, -5.0);
    cabinet.castShadow = true;
    scene.add(cabinet);

    // Dinner Table and Chair
    const tableGroup = new THREE.Group();
    tableGroup.position.set(121, 0, -3.2);
    scene.add(tableGroup);
    const tableLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.6, 8), woodMat);
    tableLeg.position.y = 0.8;
    tableLeg.castShadow = true;
    tableGroup.add(tableLeg);
    const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.2, 24), new THREE.MeshStandardMaterial({ color: 0x78350f }));
    tableTop.position.y = 1.6;
    tableTop.castShadow = true; tableTop.receiveShadow = true;
    tableGroup.add(tableTop);

    // Wood Chair
    const kChairGroup = new THREE.Group();
    kChairGroup.position.set(117, 0, -3.2);
    scene.add(kChairGroup);
    const seatLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), woodMat);
    seatLeg.position.y = 0.5;
    seatLeg.castShadow = true;
    kChairGroup.add(seatLeg);
    const seatBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 1.2), new THREE.MeshStandardMaterial({ color: 0x78350f }));
    seatBase.position.y = 1.0;
    seatBase.castShadow = true; seatBase.receiveShadow = true;
    kChairGroup.add(seatBase);
    const seatBack = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.4, 1.2), woodMat);
    seatBack.position.set(-0.55, 1.7, 0);
    seatBack.castShadow = true;
    kChairGroup.add(seatBack);

    // Cereal Bowl Blue
    const cBowl = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2), blueMat);
    cBowl.position.set(121, 1.7, -3.2);
    cBowl.castShadow = true;
    scene.add(cBowl);
    
    // Cereal loops colorful mesh
    const loopsGroup = new THREE.Group();
    loopsGroup.position.set(121, 1.9, -3.2);
    scene.add(loopsGroup);
    for (let li = 0; li < 6; li++) {
        const loopColor = li % 3 === 0 ? 0xef4444 : (li % 3 === 1 ? 0xfacc15 : 0x22c55e);
        const loopMat = new THREE.MeshBasicMaterial({ color: loopColor });
        const loop = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), loopMat);
        loop.position.set(
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.3
        );
        loopsGroup.add(loop);
    }
    loopsGroup.visible = false;

    // --- GAME ENGINE STATE ANIMATION / CONTROL LOOP ---

    let activeRoomX = 0; // Target Camera X focus
    let targetX = 0; // Target Mickey X position
    let isTransitioning = false;

    // Beep audio double note FEED
    function triggerFeedBeep() {
        playBeep(650, 70);
        setTimeout(() => playBeep(800, 70), 85);
    }

    // Beep audio arpeggio PLAY
    function triggerPlayBeep() {
        playBeep(800, 60);
        setTimeout(() => playBeep(1000, 60), 75);
        setTimeout(() => playBeep(1200, 60), 150);
    }

    // Update screen HTML HUD fills
    function updateHUD() {
        if (hudHunger) hudHunger.style.width = hunger + "%";
        if (hudLove) hudLove.style.width = love + "%";
        if (hudClean) hudClean.style.width = clean + "%";
        if (hudSleep) hudSleep.style.width = sleep + "%";
        if (mickeyLv) mickeyLv.textContent = level;
    }

    function gainExp() {
        exp += 1;
        if (exp >= 5) {
            exp = 0;
            level += 1;
            updateHUD();
        }
    }

    // Dynamic Clock
    function updateClock() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        if (pixelClock) pixelClock.textContent = `${hrs}:${mins}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3D Real-time Animation Loop (60 FPS rendering)
    let lastTime = Date.now();
    function tick() {
        requestAnimationFrame(tick);
        
        const now = Date.now();
        const delta = now - lastTime;
        lastTime = now;

        if (isDead) {
            // Dead rotation layout
            mickeyGroup.rotation.z = Math.PI / 2;
            mickeyGroup.position.y = 0.5;
            renderer.render(scene, camera);
            return;
        }

        // Camera smooth panned tracking target X
        camera.position.x += (activeRoomX - camera.position.x) * 0.08;
        // Directional light shadow box follows camera X
        dirLight.position.x = camera.position.x + 10;
        dirLight.target.position.set(camera.position.x, 0, 0);
        camera.lookAt(camera.position.x, 3.2, 0);

        // Mickey walk movement X
        if (mickeyGroup.position.x !== targetX) {
            isWalking = true;
            const dist = targetX - mickeyGroup.position.x;
            mickeyGroup.position.x += Math.sign(dist) * 0.16;
            
            // Flip facing direction
            if (dist < 0) {
                mickeyGroup.rotation.y = -Math.PI / 2; // facing left
            } else {
                mickeyGroup.rotation.y = Math.PI / 2; // facing right
            }

            // Swing legs / bob body
            const time = now * 0.012;
            legL.rotation.x = Math.sin(time) * 0.7;
            legR.rotation.x = -Math.sin(time) * 0.7;
            mickeyGroup.position.y = 1.8 + Math.abs(Math.sin(time)) * 0.18;
            
            // Swing arms walking
            armL.rotation.x = -Math.sin(time) * 0.5;
            armR.rotation.x = Math.sin(time) * 0.5;

            if (Math.abs(mickeyGroup.position.x - targetX) < 0.18) {
                mickeyGroup.position.x = targetX;
                isWalking = false;
                legL.rotation.x = 0;
                legR.rotation.x = 0;
                armL.rotation.x = 0;
                armR.rotation.x = 0;
            }
        } else {
            isWalking = false;
        }

        // --- SPECIFIC ACTION ANIMATIONS ---
        
        // 1. Disco Dancing loop
        if (isDancing) {
            const time = now * 0.015;
            mickeyGroup.rotation.y = Math.sin(time) * 0.5 + Math.PI / 2;
            mickeyGroup.position.y = 1.8 + Math.abs(Math.sin(time * 0.8)) * 0.3;
            // Wiggle arms up and down
            armL.rotation.z = Math.PI / 4 + Math.sin(time) * 0.8;
            armR.rotation.z = -Math.PI / 4 - Math.sin(time) * 0.8;
            // Spin disco ball
            discoBall.rotation.y += 0.04;
        }

        // 2. Kitchen Eating wiggling
        if (isEating) {
            const time = now * 0.008;
            // Sitting pos
            mickeyGroup.position.set(117.4, 1.25, -3.2); // Sat on kitchen chair
            mickeyGroup.rotation.y = Math.PI / 2;
            legL.rotation.x = -Math.PI / 2;
            legR.rotation.x = -Math.PI / 2;
            // Hand feeding spoon
            gloveR.position.y = 0.8 + Math.sin(time * 3) * 0.25;
            gloveR.position.z = Math.cos(time * 3) * 0.15;
            loopsGroup.visible = true;
        } else {
            loopsGroup.visible = false;
        }

        // 3. Bathroom Toilet Pooping
        if (isPooping) {
            // Sitting pos on toilet seat
            mickeyGroup.position.set(77.2, 1.4, -3.5);
            mickeyGroup.rotation.y = Math.PI / 2;
            legL.rotation.x = -Math.PI / 2;
            legR.rotation.x = -Math.PI / 2;
            // Slide shorts down
            shortsGroup.position.y = 0.25;

            // Animate poop sparkles
            sparkles.forEach(s => {
                s.mesh.visible = true;
                s.mesh.position.x += s.vx;
                s.mesh.position.y += s.vy;
                s.mesh.position.z += s.vz;
                s.vy -= 0.006; // gravity
                s.age++;
                if (s.age > 40) {
                    // reset particle back to toilet
                    s.mesh.position.set(77.8, 1.5, -3.5);
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 0.04 + Math.random() * 0.08;
                    s.vx = Math.cos(angle) * speed + 0.05; // shoot forward
                    s.vy = 0.04 + Math.random() * 0.08;
                    s.vz = Math.sin(angle) * speed;
                    s.age = 0;
                }
            });
        } else {
            sparkles.forEach(s => s.mesh.visible = false);
            shortsGroup.position.y = 0.55; // reset shorts
        }

        // 4. Sleeping Bed position
        if (isSleeping) {
            mickeyGroup.position.set(32, 1.25, -3.5); // Sat in bed
            mickeyGroup.rotation.z = -Math.PI / 2; // lying down flat
            mickeyGroup.rotation.y = 0;
            legL.rotation.x = 0; legR.rotation.x = 0;
            headGroup.rotation.y = 0;
            // Close eyes
            eyeLWhite.scale.set(0.75, 0.1, 0.5);
            eyeRWhite.scale.set(0.75, 0.1, 0.5);
            pupilL.visible = false; pupilR.visible = false;
        } else {
            if (!isEating && !isPooping) {
                mickeyGroup.rotation.z = 0; // standing upright
            }
            eyeLWhite.scale.set(0.75, 1.5, 0.5);
            eyeRWhite.scale.set(0.75, 1.5, 0.5);
            pupilL.visible = true; pupilR.visible = true;
        }

        // Default neutral bobbing if idle standing
        if (!isWalking && !isDancing && !isEating && !isPooping && !isSleeping) {
            mickeyGroup.position.y = 1.8 + Math.sin(now * 0.002) * 0.08;
            mickeyGroup.rotation.y = Math.PI / 2; // face right
            legL.rotation.x = 0; legR.rotation.x = 0;
            armL.rotation.z = Math.PI / 4;
            armR.rotation.z = -Math.PI / 4;
        }

        renderer.render(scene, camera);
    }

    // Trigger AI walks inside the room coordinates occasionally when idle
    setInterval(() => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        if (Math.random() < 0.4) {
            targetX = -5 + Math.floor(Math.random() * 11); // Random room X target
        }
    }, 5000);

    // --- INTERACTIVE CARTON BUBBLE BUTTONS TRiggers ---

    // 1. NOURRIR BUTTON
    btnFeed.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        triggerFeedBeep();

        isEating = true;
        actionText.textContent = "Mickey va manger dans la cuisine...";
        activeRoomX = 120; // focus kitchen
        targetX = 117; // dining chair position

        // Sit, eat bowl cereal, and pan camera back
        setTimeout(() => {
            actionText.textContent = "Yum Yum ! C'est délicieux ! 🥣";
            hunger = Math.min(100, hunger + 20);
            gainExp();
            updateHUD();

            setTimeout(() => {
                actionText.textContent = "Mickey retourne au salon";
                activeRoomX = 0;
                targetX = 0;
                // reset chair posture
                legL.rotation.x = 0; legR.rotation.x = 0;
                isEating = false;
                gloveR.position.set(0.9, 0.8, 0); // reset glove pos
            }, 3000);
        }, 3500);
    });

    // 2. JOUER BUTTON (DISCO)
    btnPlay.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        triggerPlayBeep();

        isDancing = true;
        actionText.textContent = "C'est l'heure du DISCO ! 🎵💃";
        activeRoomX = 0;
        targetX = 0;

        setTimeout(() => {
            actionText.textContent = "Danse terminée ! Mickey s'est bien amusé";
            love = Math.min(100, love + 20);
            gainExp();
            updateHUD();
            
            isDancing = false;
            armL.rotation.set(0, 0, Math.PI / 4);
            armR.rotation.set(0, 0, -Math.PI / 4);
        }, 4000);
    });

    // 3. TOILETTE BUTTON (CACA SPARKLES)
    btnClean.addEventListener("click", () => {
        if (isDead || isSleeping || isWalking || isDancing || isPooping || isEating) return;
        playBeep(450, 150);

        isPooping = true;
        actionText.textContent = "Mickey va au cabinet...";
        activeRoomX = 80;
        targetX = 77.2; // Toilet position

        // Initialize particles
        sparkles.forEach(s => {
            s.mesh.position.set(77.8, 1.5, -3.5);
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.04 + Math.random() * 0.08;
            s.vx = Math.cos(angle) * speed + 0.04;
            s.vy = 0.04 + Math.random() * 0.08;
            s.vz = Math.sin(angle) * speed;
            s.age = Math.floor(Math.random() * 30);
        });

        setTimeout(() => {
            actionText.textContent = "EXPLOSION DE SPARKLES !!! ✨💩";
            clean = Math.min(100, clean + 25);
            updateHUD();

            setTimeout(() => {
                actionText.textContent = "Mickey est tout propre ! Retour au salon";
                activeRoomX = 0;
                targetX = 0;
                legL.rotation.x = 0; legR.rotation.x = 0;
                isPooping = false;
            }, 3000);
        }, 3500);
    });

    // 4. SOMMEIL BUTTON (LIGHTS OUT)
    btnSleep.addEventListener("click", () => {
        if (isDead || isWalking || isDancing || isPooping || isEating) return;
        playBeep(320, 180);

        if (!isSleeping) {
            // Sleep sequence
            actionText.textContent = "Mickey va se coucher...";
            activeRoomX = 40;
            targetX = 32; // Bed X position

            setTimeout(() => {
                actionText.textContent = "Bonne nuit Mickey ! Zzz... 💤";
                isSleeping = true;
                // Dim lights
                ambientLight.intensity = 0.15;
                dirLight.intensity = 0;
                updateHUD();
            }, 3000);
        } else {
            // Wake up
            actionText.textContent = "Debout Mickey ! Le soleil se lève ! ☀️";
            isSleeping = false;
            // Restore lights
            ambientLight.intensity = 0.7;
            dirLight.intensity = 0.8;
            activeRoomX = 0;
            targetX = 0;
            updateHUD();
        }
    });

    // Stats Decay Interval (every 1.5 seconds)
    setInterval(() => {
        if (isDead) return;

        if (isSleeping) {
            sleep = Math.min(100, sleep + 6);
            hunger = Math.max(0, hunger - 1);
            love = Math.max(0, love - 1);
            clean = Math.max(0, clean - 0.5);

            if (sleep === 100) {
                btnSleep.click(); // awake automatically
            }
        } else {
            hunger = Math.max(0, hunger - 1.5);
            love = Math.max(0, love - 1);
            clean = Math.max(0, clean - 2);
            sleep = Math.max(0, sleep - 0.8);
        }

        if (hunger === 0 || sleep === 0 || clean === 0) {
            isDead = true;
            actionText.textContent = "☠️ Game Over ! Mickey s'est endormi pour toujours.";
            updateHUD();
        }

        updateHUD();
    }, 1500);

    // Initial trigger render tick
    updateHUD();
    tick();

    // Trigger loader message
    actionText.textContent = "Monde 3D chargé ! Prenez soin de Mickey !";
}

// Start 3D Engine on DOM loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTamagotchi);
} else {
    initTamagotchi();
}
