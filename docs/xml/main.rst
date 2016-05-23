マップ構造
==========

全てのXML定義ファイルは一つの ``<map>`` ノードが存在していなければなりません。 また、ファイルの文字コードはUTF-8を使用してください。
現在のXML定義ファイルのバージョンは``1.3.5``です。

.. code-block:: xml

    <?xml version="1.0" encoding="utf-8"?>
    <map proto="1.3.5">
        <!-- マップ名 -->
        <name>マップ名</name>
        <!-- マップバージョン -->
        <version>1.0.0</version>
        <!-- マップの説明 -->
        <objective>コントロールポイントの制圧 / Capture the Control Point</objective>

        <!-- マップ作者 複数指定可能です。contribution=""属性でどのようにマップに貢献したかを設定する事が出来ます。 -->
        <authors>
            <author uuid="069a79f4-44e9-4726-a5be-fca90e38aaf5"/> <!-- Notch -->
            <author uuid="61699b2e-d327-4a01-9f1e-0ea8c3f06bc6" contribution="XML Coding"/> <!-- Dinnerbone -->
        </authors>

        <!-- マップ制作協力者 複数指定可能です。contribution=""属性でどのようにマップに貢献したかを設定する事が出来ます。-->
        <contributors>
            <contributor uuid="61699b2e-d327-4a01-9f1e-0ea8c3f06bc6" contribution="Map Tester"/> <!-- Dinnerbone -->
        </contributors>
       <!--
        ...
        ゲームモード設定やゲーム設定など
        ...
        -->
    </map>
