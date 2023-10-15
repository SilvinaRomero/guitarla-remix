export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return fechaNueva.toLocaleString('es-ES', opciones);
}

export const formatearFechaCompleta = fecha => {


    const f = new Date(fecha).toLocaleDateString('es-ES', { dateStyle: 'full' });
    const capitalizationMap = {
        lunes: 'Lunes',
        martes: 'Martes',
        miércoles: 'Miércoles',
        jueves: 'Jueves',
        viernes: 'Viernes',
        sábado: 'Sábado',
        domingo: 'Domingo',
        enero: 'Enero',
        febrero: 'Febrero',
        marzo: 'Marzo',
        abril: 'Abril',
        mayo: 'Mayo',
        junio: 'Junio',
        julio: 'Julio',
        agosto: 'Agosto',
        septiembre: 'Septiembre',
        octubre: 'Octubre',
        noviembre: 'Noviembre',
        diciembre: 'Diciembre',
    };
    const nfModified = f.replace(/(?:lunes|martes|miércoles|jueves|viernes|sábado|domingo|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/gi, match => capitalizationMap[match.toLowerCase()]);
    return nfModified;
}