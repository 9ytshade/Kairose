export const CREATOR_INFO = {
  name: "Kairose",
  title: "AI Director, Commercial Ads Creator & Visual Artist",
  tagline: "Directing synthetic realities.",
  subTagline: "AI filmmaker, commercial ads creator & generative visual director.",
  bio: "Kairose is a pioneering AI director and commercial ads creator crafting next-generation brand films, cinematic shorts, and high-fashion visual narratives. By combining diffusion pipelines, character LoRAs, and motion synthesis, she produces work that blurs the boundary between physical film capture and latent imagination.",
  location: "London / Global Remote",
  availability: "Available for Commissions & Commercial Direction",
  statusBadge: "Accepting Commercial & Narrative Projects",
  stats: [
    { label: "Total Views", value: "140M+", hint: "Across viral brand reels & film campaigns" },
    { label: "Commercial Films", value: "24+", hint: "For tech, fashion, & luxury houses" },
    { label: "Model Stack", value: "12+", hint: "Custom LoRAs, Gen-3, Flux, Kling, ComfyUI" },
    { label: "Festivals & Awards", value: "5", hint: "Runway AI Film Fest & AI Creatives Award" },
  ],
  socials: {
    instagram: "https://instagram.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
    runway: "https://runwayml.com",
    discord: "https://discord.com",
    email: "kairose.studio@gmail.com"
  }
};

export const PARTNERS_AND_RECOGNITION = [
  { name: "RUNWAY GEN:STUDIO", role: "Featured Creator" },
  { name: "MIDJOURNEY LABS", role: "Showcase Archive" },
  { name: "A24 SPEC INITIATIVE", role: "Creative Direction" },
  { name: "VOGUE SYNTHETIC", role: "Digital Fashion Week" },
  { name: "LUMA DREAM MACHINE", role: "Alpha Partner" },
  { name: "SONY SOUNDSCAPES", role: "Visualizer Series" },
  { name: "KLING AI CREATIVE", role: "Global Winner" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: "elysium-2099",
    title: "Elysium 2099: Neo-Kyoto Drift",
    subtitle: "Speculative Cinematic Short Film",
    category: "video",
    featured: true,
    aspectRatio: "16:9",
    duration: "1:42",
    badge: "Runway AI Film Fest Nominee",
    views: "3.8M",
    client: "Independent / Creative Lab",
    year: "2025",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80",
    overview: "A dystopian neo-noir short film exploring synthetic memory augmentation in a rainy cyberpunk metropolis. Rendered using Runway Gen-3 Alpha with custom character consistency LoRA and 35mm anamorphic camera motions.",
    telemetry: {
      model: "Runway Gen-3 Alpha + Flux.1 Dev",
      seed: "982741094",
      cfg: "7.5",
      motionScore: "8.2",
      camera: "35mm Anamorphic, Slow Dolly Push, 24fps film grain",
      prompt: "Cinematic film still, anamorphic 2.39:1 aspect ratio. Rain-soaked cyberpunk Tokyo street at midnight, neon reflections on wet asphalt in cyan and magenta. A biomorphic augmented woman in a high-collar iridescent vinyl coat walking toward the camera, volumetric mist, blade runner 2049 aesthetic, master cinematography by Roger Deakins, 8k resolution, photorealistic, subtle motion blur, panavision lenses.",
      negativePrompt: "lowres, plastic skin, distorted anatomy, cartoon, 3d render, flicker, watermark, oversaturated, generic video artifact",
      pipelineSteps: [
        "Base Character LoRA trained on 45 custom portrait references in Kohya",
        "Keyframe synthesis in Flux.1 Dev with depth conditioning",
        "Motion interpolation in Runway Gen-3 Alpha with custom camera paths",
        "Neural upscaling to 4K 60fps via Topaz Video AI",
        "DaVinci Resolve film emulation + spatial soundscape in ElevenLabs"
      ]
    }
  },
  {
    id: "hyperion-kinetic",
    title: "Hyperion Kinetic: Quantum Automotive",
    subtitle: "Luxury Electric Supercar Commercial",
    category: "commercial",
    featured: true,
    aspectRatio: "16:9",
    duration: "0:45",
    badge: "Commercial Ad Campaign",
    views: "4.5M",
    client: "Hyperion Mobility Europe",
    year: "2025",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    posterUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80",
    overview: "A broadcast-ready 45-second commercial for a theoretical quantum hypercar carving through Iceland's black sand volcanic plains at twilight. Produced entirely with text-to-video and motion control.",
    telemetry: {
      model: "Luma Dream Machine 1.5 + Kling 1.5 Pro",
      seed: "772183991",
      cfg: "7.0",
      motionScore: "9.4",
      camera: "High-speed Russian Arm chase vehicle, FPV drone dive, 50mm anamorphic",
      prompt: "Dynamic high-speed tracking shot of a matte-black aerodynamic concept hypercar drifting across black sand dunes of Vik, Iceland. Glacial icebergs in the background under twilight aurora borealis sky. Dramatic camera orbit, headlights cutting through cold sea spray, realistic physics, motion blur, commercial advertising grade, cinematic color grade, 4k 60fps.",
      negativePrompt: "shaky, morphing wheels, unaligned vehicle body, unnatural speed jumps, blurry environment",
      pipelineSteps: [
        "3D car CAD model used as ControlNet depth reference in ComfyUI",
        "Generative physics simulation rendered in Kling Pro 1.5",
        "Wheel spin & particle trajectory fixed via frame-by-frame inpainting",
        "Dynamic engine sound synthesis engineered in Suno & Soundly"
      ]
    }
  },
  {
    id: "aetheria-commercial",
    title: "Aetheria: Chronos Titanium Watch",
    subtitle: "Global Luxury Commercial Spot",
    category: "commercial",
    featured: true,
    aspectRatio: "16:9",
    duration: "0:35",
    badge: "Commercial Ad Award Winner",
    views: "5.1M",
    client: "Aetheria Haute Horlogerie",
    year: "2025",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    posterUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    overview: "A flagship 35-second luxury commercial advert for a titanium chronometer assembling itself in zero-gravity amidst molten crystal droplets and starlight. Engineered for commercial television and social campaigns.",
    telemetry: {
      model: "Runway Gen-3 Alpha + ComfyUI Latent Noise",
      seed: "31894210",
      cfg: "7.2",
      motionScore: "9.6",
      camera: "100mm Macro probe lens, floating 360 orbit, cinematic studio rim light",
      prompt: "Commercial product advertising, extreme macro shot of luxury skeleton titanium watch floating in zero gravity, intricate mechanical gears ticking in perfect synchronization, floating iridescent micro-droplets of mercury, deep obsidian background with subtle rim lighting, photorealistic 8k, high-speed phantom camera 1000fps slow motion.",
      negativePrompt: "blurry, low quality, warped watch hands, flickering background, artifacts",
      pipelineSteps: [
        "Watch mechanical assets synthesized via multi-angle LoRA",
        "Zero-gravity orbital motion generated in Runway Gen-3 Alpha",
        "Particle physics pass layered in DaVinci Fusion",
        "Sound design and ticking acoustics created in ElevenLabs"
      ]
    }
  },
  {
    id: "chronos-awakening",
    title: "Chronos Awakening: Relics of Tomorrow",
    subtitle: "Surreal Sci-Fi Worldbuilding",
    category: "experimental",
    featured: true,
    aspectRatio: "16:9",
    duration: "2:10",
    badge: "Staff Pick",
    views: "890K",
    client: "MoMA Digital Artifacts Lab",
    year: "2025",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    overview: "An archaeological expedition uncovering colossal quantum monolithic structures submerged in an alien desert. Blends brutalist architecture with cosmic surrealism.",
    telemetry: {
      model: "Runway Gen-3 Alpha + Midjourney v6.1",
      seed: "21980345",
      cfg: "8.0",
      motionScore: "7.8",
      camera: "Helicopter gimbal wide sweep, 24mm ultra-wide prime",
      prompt: "Epic cinematic wide shot, mysterious monolithic brutalist temple rising from endless terracotta dunes on a desert planet with twin moons. Tiny exploration crew wearing reflective white hazard suits standing at the base. Gigantic scale, atmospheric dust haze, dramatic golden hour sunbeams, Dune 2021 cinematography, Hans Zimmer score feeling, photorealistic 8k.",
      negativePrompt: "oversaturated, video game render, low poly, jittery motion, blurry faces",
      pipelineSteps: [
        "Worldbuilding moodboard generated with Midjourney v6.1",
        "Environment depth map extraction via ComfyUI DepthAnything",
        "Camera crane shot generated in Runway Gen-3 with custom prompt pacing",
        "Sub-bass cinematic audio master with custom modular synth score"
      ]
    }
  },
  {
    id: "nebula-sound-vision",
    title: "Nebula Pulse: Kinetic Music Video",
    subtitle: "Official AI Music Visualizer",
    category: "video",
    featured: true,
    aspectRatio: "9:16",
    duration: "0:30",
    badge: "15M Viral Reel",
    views: "15.2M",
    client: "Sony Music Electronic",
    year: "2025",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    overview: "A vertical cinematic visualizer designed for social platforms. Rapid beat-synced optical morphs between deep-sea bioluminescence, cosmic nebulas, and liquid chrome dancers.",
    telemetry: {
      model: "Kling 1.5 Pro + Deforum ComfyUI",
      seed: "63201948",
      cfg: "8.5",
      motionScore: "9.8",
      camera: "Continuous 360 vertical vortex spin, speed ramping",
      prompt: "Hyper-speed continuous zoom through a vortex of molten mercury and bioluminescent jellyfish tentacles in the deep dark ocean, transforming into a glowing cybernetic dancer, iridescent particles, neon laser pulses, syncopated rhythm, ultra-fluid 60fps, octane render clarity.",
      negativePrompt: "choppy frames, low frame rate, disfigured limbs, blur, dull colors",
      pipelineSteps: [
        "Audio beat-grid mapping in Ableton Live to trigger keyframe prompts",
        "Deforum ComfyUI audio-reactive latent morphing",
        "Motion refinement in Kling 1.5 Pro",
        "Optical flow frame rate upscaling to 60fps"
      ]
    }
  },
  {
    id: "solitude-in-silicon",
    title: "Solitude in Silicon",
    subtitle: "Digital Fashion & Haute Couture Editorial",
    category: "stills",
    featured: true,
    aspectRatio: "4:5",
    duration: "STILL",
    badge: "Vogue Digital Feature",
    views: "1.2M",
    client: "Vogue Synthetic / Iris Van Herpen Homage",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    overview: "An experimental high-fashion lookbook merging parametric organic architecture with haute couture silicone fabrics. Exploring the texture of zero-gravity silk and liquid crystal filaments.",
    telemetry: {
      model: "Midjourney v6.1 + Magnific AI Upscale",
      seed: "442109831",
      cfg: "6.0",
      motionScore: "N/A (Editorial Stills)",
      camera: "Hasselblad H6D-100c, 85mm f/1.4 portrait lens, studio ring light",
      prompt: "Editorial high fashion photography, haute couture avant-garde gown sculpted from liquid bioplastic and frosted translucent quartz filaments, floating weightlessly in an obsidian minimalist museum. Elegant model with striking sculptural cheekbones, chiaroscuro lighting, subtle skin pores, shot on 100mm macro, Vogue editorial cover, architectural elegance, muted monochrome with faint lilac refraction --ar 4:5 --style raw --v 6.1",
      negativePrompt: "blurry, smooth airbrushed skin, oversaturated colors, cheap fabric, bad hands, cartoonish proportions",
      pipelineSteps: [
        "Prompt iteration using Midjourney v6.1 with fine-tuned raw stylize tokens",
        "Subsurface scattering detail enhancement via Magnific AI",
        "Photoshop frequency separation for high-end micro-texture preservation",
        "Fine color grading in Capture One Pro"
      ]
    }
  },
  {
    id: "lumina-synthetic-portrait",
    title: "Lumina: Neural Metamorphosis",
    subtitle: "AI Character Study & Kinetic Beauty",
    category: "stills",
    featured: false,
    aspectRatio: "1:1",
    duration: "STILL",
    badge: "Midjourney Gallery Feature",
    views: "1.9M",
    client: "Cosmetics AI Lab",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80",
    overview: "A hyper-detailed portrait exploring microscopic skin luminescence, bio-luminescent freckles, and iridescent chromatic makeup under prism light dispersion.",
    telemetry: {
      model: "Flux.1 Dev + RealESRGAN",
      seed: "55120399",
      cfg: "6.5",
      motionScore: "N/A",
      camera: "Macro 105mm f/2.8 lens, glass prism lens filter, directional tungsten and neon",
      prompt: "Extreme close up beauty portrait of a woman with luminescent iridescent pigment dusted across her cheekbones, sparkling micro-crystals, delicate wet sheen on skin, natural fine skin pores, eyelashes in razor-sharp focus, prism rainbow light flare across eyes, fine art photography, neutral obsidian background, 8k masterpiece.",
      negativePrompt: "smooth airbrushed cartoon skin, plastic eyes, oversaturated, multiple pupils, blurry focus",
      pipelineSteps: [
        "Prompt engineering focusing on micro-optical phenomena",
        "Flux.1 Dev generation with 40 steps, DPM++ 2M Karras",
        "Skin micro-pore enhancement via Magnific AI",
        "Precision color balancing in DaVinci Resolve Studio"
      ]
    }
  }
];

export const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "Narrative & Prompt Architecture",
    tagline: "From Latent Concept to Precise Syntax",
    description: "Deep prompt engineering with camera lenses, lighting ratios, cinematic directors' references, and custom-trained character LoRAs for uncompromising visual consistency.",
    tools: ["Midjourney v6.1", "Flux.1 Dev", "Kohya LoRA Trainer", "ChatGPT-4o Director"],
    metric: "40+ Iterations",
    codeSnippet: "Prompt: 35mm anamorphic, f/1.8, volumetric mist, Roger Deakins lighting --v 6.1 --style raw"
  },
  {
    step: "02",
    title: "Generative Motion Synthesis",
    tagline: "Directing Latent Space Camera Work",
    description: "Orchestrating physical camera paths (dolly, crane, FPV orbit, dutch tilts) and character motion using advanced text-to-video and image-to-video diffusion engines.",
    tools: ["Runway Gen-3 Alpha", "Luma Dream Machine", "Kling 1.5 Pro", "ComfyUI AnimateDiff"],
    metric: "Temporal Lock",
    codeSnippet: "Motion: camera_push: +4.2 | zoom: +2.1 | pan: -1.0 | fps: 24 | steps: 35"
  },
  {
    step: "03",
    title: "Neural Upscaling & Clean-Up",
    tagline: "Sub-Pixel Fidelity at 4K Broadcast Standards",
    description: "Eliminating generation artifacts, fixing micro-anatomy, stabilizing high-frequency textures, and upscaling to pristine 4K 60fps broadcast delivery.",
    tools: ["Topaz Video AI", "Magnific AI", "RealESRGAN", "DaVinci Resolve Magic Mask"],
    metric: "4K DCI Output",
    codeSnippet: "Upscale: 4x Neural Tensor Flow | Denoise: 0.15 | Detail Recovery: 0.88"
  },
  {
    step: "04",
    title: "Sound Design & Cinema Grading",
    tagline: "Immersive Audio & Color Mastery",
    description: "Synchronizing procedural AI soundscapes, spatial Foley, neural voice synthesis, and 35mm film stock emulation (Kodak Vision3 / 5219) for true cinematic immersion.",
    tools: ["ElevenLabs Foley", "Suno AI v3.5", "DaVinci Resolve Studio", "FilmConvert Nitrate"],
    metric: "Dolby Atmos",
    codeSnippet: "Grade: Kodak 5219 Emulation | Halation: 15% | Film Grain: 35mm Fine"
  }
];

export const PROMPT_PLAYGROUND_PRESETS = [
  {
    id: "cyberpunk",
    name: "Cybernetic Cinema",
    model: "Runway Gen-3 Alpha",
    camera: "Anamorphic 35mm, f/1.4",
    lighting: "Dual-tone Cyan & Neon Magenta",
    prompt: "Anamorphic 2.39:1 wide cinema still. Rain-slicked Neo-Tokyo alleyway at 3AM, neon holographic billboards reflected in wet asphalt. A lone bio-hacker in an iridescent reflective technical parka, volumetric fog, Kodak Vision3 500T 35mm film grain.",
    outputImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "couture",
    name: "Avant-Garde Fashion",
    model: "Flux.1 Dev + Magnific",
    camera: "Hasselblad H6D, 85mm Prime",
    lighting: "Soft Sculptural Chiaroscuro",
    prompt: "Vogue haute couture editorial. Sculptural garment woven from liquid iridescent glass filaments and dark matte obsidian plates. Striking high-fashion model posing gracefully in a minimalist concrete gallery, sharp natural skin texture, masterpiece.",
    outputImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "sci-fi",
    name: "Monolithic Worldbuilding",
    model: "Midjourney v6.1 + Kling",
    camera: "Ultra-wide 24mm Helicopter Push",
    lighting: "Desert Golden Hour Rays",
    prompt: "Epic brutalist alien monolith discovered in deep terracotta sand dunes of an exoplanet, giant scale, twin suns setting on the horizon, tiny research crew in white hazmat suits looking up in awe, Dune cinematography style by Greig Fraser.",
    outputImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "portrait",
    name: "Neural Luminescence",
    model: "Flux.1 Dev",
    camera: "105mm Macro f/2.8",
    lighting: "Prism Dispersion & Direct Tungsten",
    prompt: "Macro beauty photography. Fine micro-crystals and bioluminescent pigment dusted over cheekbones, wet skin sheen, razor sharp iris detail, rainbow light prism refraction, pure obsidian dark backdrop, 8k resolution.",
    outputImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
  }
];

export const SERVICE_PACKAGES = [
  {
    title: "Commercial AI Direction",
    target: "Brands, Agencies & Luxury Houses",
    description: "End-to-end creative direction, script-to-screen AI video commercial ads, 4K broadcast delivery, and custom brand character consistency.",
    deliverables: ["15s, 30s & 60s Commercial Cutdowns", "Custom Brand Style LoRA", "4K 60fps Master", "Multi-Platform Ratios (9:16, 16:9, 1:1)"],
    timeline: "2 – 3 Weeks",
    popular: true
  },
  {
    title: "Music Video & Visualizer Series",
    target: "Artists, Labels & Live Tours",
    description: "Audio-reactive kinetic visuals, worldbuilding narrative arcs, and hypnotic motion loops tailored for stadium stage LED walls and streaming platforms.",
    deliverables: ["Full Length 3-4min Video", "10x Vertical Promo Reels", "Stage Visual Loops Pack", "Stems & Stills Archive"],
    timeline: "3 – 4 Weeks",
    popular: false
  },
  {
    title: "Synthetic Editorial & Stills",
    target: "Magazines, Lookbooks & Concepts",
    description: "Hyper-realistic fashion lookbooks, key-art posters, and concept worldbuilding stills rendered at fine-art print resolutions (8K+).",
    deliverables: ["12 – 20 Curated Hero Stills", "8K Print Ready TIFFs", "Prompt & Seed Documentation", "Full Commercial Rights"],
    timeline: "1 – 2 Weeks",
    popular: false
  }
];
