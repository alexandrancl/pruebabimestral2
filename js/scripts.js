let personas = [
    {
        nombre:"Ana",
        edad:15,
        grado:"5to",
        nivel:"secundaria"
    },
    {
        nombre:"Carlos",
        edad:16,
        grado:"5to",
        nivel:"secundaria"
    },
    {
        nombre:"Juan",
        edad:12,
        grado:"2do",
        nivel:"secundaria"
    },
    {
        nombre:"Sofia",
        edad:10,
        grado:"6to",
        nivel:"primaria"
    },
    {
        nombre:"Ana",
        edad:12,
        grado:"1ro",
        nivel:"secundaria"
    },
    {
        nombre:"Pedro",
        edad:11,
        grado:"1ro",
        nivel:"secundaria"
    }
];
for(let i=0; i<personas.length; i++)
{
    console.log(i+1)
    console.log("-"+personas[i].nombre+" - "+personas[i].edad+" - "+personas[i].grado+" - "+personas[i].nivel)
}

console.log("Pertenecen al nivel secundario")
for(let i=0;i<personas.length;i++)
{
    if(personas[i].nivel="secundaria")
    {
        console.log("=>"+personas[i].nombre+"-"+personas[i].grado)
    }
}

console.log("Pertenecen al nivel primario")
for(let i=0;i<personas.length;i++)
{
    if(personas[i].nivel="primaria")
    {
        console.log("*"+personas[i].nombre+"-"+personas[i].grado)
    }
}

console.log("Tienen 15 o más")
for(let i=0;i<personas.length;i++)
{
    if(personas[i].edad> 14)
    {
        console.log("*"+personas[i].nombre+"-"+personas[i].edad)
    }
}