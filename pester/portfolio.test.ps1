# Powershell script to demostrate black box testing
$token = ""
$base_url = "http://localhost:31000"

Describe "Given portfolio API at $($base_url)" {

    $endpoint_url = '/api/portfolio'

    $api_url = "$base_url$endpoint_url"

    Context "When getting list of portfolios $api_url" {

        $headers = @{
            "Content-Type" = "application/json"
        }

        $body = @{
            "name" = "my portfolio";
            "description" = "description of my portfolio"
        } | ConvertTo-Json -Compress

        $response = Invoke-WebRequest -Method Post -Uri $api_url -Headers $headers -Body $body

        It "should return a response status code 201 ('Created')" {
            $response.StatusCode | Should Be 201
            # $token = $response.Content
        }
    }

    Context "When getting list of portfolios $api_url" {
        
        It "should return a string 'OKOK'" {
            # Arrange
            
            $headers = @{
                "Content-Type" = "application/json"
            }

            $body = @{
                "username" = "testuser";
                "password" = "testpassw0rd"
            } | ConvertTo-Json -Compress

            # Act
            # $response = Invoke-RestMethod -Method 'Post' -Uri $url -Headers $headers -Body $body
            # The $response object from Invoke-WebRequest is more descriptive (for example, it has the status code)
            $response = Invoke-WebRequest -Method Get -Uri $api_url -Headers $headers

            # Assert(s)
            $response.StatusCode | Should Be 200
            $token = $response.Content
            Write-Host $token
            # $response.Length | Should BeGreaterThan  0
            # Write-Host "Response: ", $response, $response.StatusCode

            # Note: In newer versions of Pester, there's a BeGreaterOrEqual operator.
            # For list of assertions available in Pester 3.4 see: C:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\Functions\Assertions            
        }
    }
}