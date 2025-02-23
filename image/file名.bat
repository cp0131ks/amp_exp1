@echo off
setlocal enabledelayedexpansion
for /l %%i in (1,1,12) do (
    set num=%%i
    if %%i LSS 10 (
        set num=0%%i
    )
    ren "スライド%%i.jpg" "w!num!.jpg"
)
endlocal
