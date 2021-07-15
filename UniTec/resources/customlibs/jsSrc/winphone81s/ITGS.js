var ITGS = ITGS || { };

ITGS.statichelper_getArguments = function (arg2) 
{

var result = '{';

for (var i = 0; i < arg2.length; ++i) 
{
     if (i > 0)
       result += ', ';

     var element = arg2[i];

     result += jetro.variant.format( element );
}

result += '}';

return result;
}
ITGS.GetListBT = function ()
{
    return ITGS.GetListBT_variadic(arguments);
}
ITGS.GetListBT_variadic = function (arg)
{
    var formattedArg = ITGS.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction ITGS.GetListBT_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

ITGS.StartRead = function ()
{
    return ITGS.StartRead_variadic(arguments);
}
ITGS.StartRead_variadic = function (arg)
{
    var formattedArg = ITGS.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction ITGS.StartRead_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

ITGS.StopRead = function ()
{
    return ITGS.StopRead_variadic(arguments);
}
ITGS.StopRead_variadic = function (arg)
{
    var formattedArg = ITGS.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction ITGS.StopRead_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

ITGS.TurnOff = function ()
{
    return ITGS.TurnOff_variadic(arguments);
}
ITGS.TurnOff_variadic = function (arg)
{
    var formattedArg = ITGS.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction ITGS.TurnOff_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

ITGS.SetTimer = function ()
{
    return ITGS.SetTimer_variadic(arguments);
}
ITGS.SetTimer_variadic = function (arg)
{
    var formattedArg = ITGS.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction ITGS.SetTimer_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

