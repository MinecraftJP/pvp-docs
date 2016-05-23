Control Point
=============

Control Pointゲームモードはコントロールポイントを制圧し、制圧数、スコア等の条件を満たすことが勝利条件です。

このゲームモードでは ``<controlpoints>`` タグに設定する属性によって勝者の決定方法を3種類から選ぶ事が出来ます。

.. csv-table::
    :header: "勝利判定", "属性", "勝利条件"
    :widths: 10, 10, 40

    スコアベース, score-limit, コントロールポイントを制圧中のチームに10秒ごとに加算されるスコアがscore-limitに到達
    制圧数(即時), capture-limit, capture-limitに指定された数のコントロールポイントを制圧
    制圧数(時間), time, time属性に指定された時間を経過時に制圧数が多いチーム


各コントロールポイントは ``<controlpoint>`` タグにより定義します。 ``<controlpoint>`` タグ内の ``<capture>`` タグはコントロールポイントをキャプチャ可能な領域、 ``<flag>`` タグはキャプチャ状況を表す羊毛の領域になります。 ``<flag>`` タグについては必須ではありません。

``<controlpoint>`` タグのscore属性によりスコアベースでの10秒毎に加算されるスコアを指定する事が出来ます。

<controlpoints>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10, 80, 10

   ``score-limit``, チームのスコアが指定された値に達するとチームが勝利します。, 整数
   ``capture-limit``, チームのキャプチャしたコントロールポイントが指定された値に達するとチームが勝利します。, 整数
   ``time``, 指定された時間にコントロールポイントのキャプチャ数が多いチームが勝利します。, :doc:`TimePeriod </data/timeperiod>`

<controlpoint>ノードの属性
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10, 80, 10

   ``id``, XMLとスクリプトから指定する時の名前です。, 文字列
   ``name``, ``必須`` コントロールポイントの名前です。, 文字列
   ``score``, コントロールポイントキャプチャ中に10秒ごとに加算されるスコアを指定します。, 整数
   ``capture-time``, コントロールポイントのキャプチャにかかる時間を指定します。, :doc:`TimePeriod </data/timeperiod>`

.. code-block:: xml

    <controlpoints score-limit="200">
        <!-- <controlpoints>タグの属性 -->
        <!-- score-limit="200" -->
        <!-- capture-limit="2" -->
        <!-- time="5m" (5分) -->
        <controlpoint id="tower-r" name="Tower R" score="5">
            <capture>
                <cuboid min="1603,76,-1552" max="1607,78,-1548"/>
            </capture>
            <flag>
                <cuboid min="1603,75,-1552" max="1607,75,-1548"/>
            </flag>
        </controlpoint>

        <controlpoint id="tower-b" name="Tower B">
            <capture>
                <cuboid min="1552,76,-1693" max="1556,78,-1689"/>
            </capture>
            <flag>
                <cuboid min="1552,75,-1693" max="1556,75,-1689"/>
            </flag>
        </controlpoint>
    </controlpoints>

注意事項
--------

コントロールポイント周辺は必ずフィルターで地形保護するようにしてください。特にTNTなどでコントロールポイントが消失するとゲームの進行が困難になる可能性があります。